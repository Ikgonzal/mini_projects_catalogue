// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand;
}

// Factory function that returns an object that contains the properties specimenNum and dna that correspond to the parameters provided.
const pAequorFactory = (number, array) => {
  return {
    specimenNum: number,
    dna: array,
    mutate () {
      let baseIndex = Math.floor(Math.random() * 15);
      let baseToBeMutated = this.dna[baseIndex];
      let baseMutted = returnRandBase();
      while (baseToBeMutated === baseMutted)
        baseMutted = returnRandBase();
      this.dna[baseIndex] = baseMutted;
      return this.dna;
    },
    compareDNA (obj) {
      let coincidences = 0;
      for (let i = 0; i < this.dna.length - 1; i++)
        if (obj.dna[i] == this.dna[i])
          coincidences++;
      let percentDna = (coincidences / this.dna.length) * 100;
      console.log(`specimen ${this.specimenNum} and specimen ${obj.specimenNum} have ${percentDna} DNA in common`);
    },
    willLikelySurvive () {
      let count = 0;
      for (let i = 0; i < this.dna.length - 1; i++) {
        if (this.dna[i] === 'C' || this.dna[i] === 'G')
          count++;
      }
      let survivalChance = (count / this.dna.length) * 100;
      if (survivalChance > 60)
        return true;
      else
        return false;
    }
  }
}

// Function that returns 30 instances of pAequor that can survive in their natural environment.
function survivingSamples () {
  let survivingInstancesCount = 0;
  let survivingInstances = [];
  while (survivingInstancesCount < 30)
  {
    const newDna = pAequorFactory(7, mockUpStrand());
    if (newDna.willLikelySurvive ())
    {
      survivingInstances.push(newDna);
      survivingInstancesCount++;
    }
  }
    return survivingInstances;
}
