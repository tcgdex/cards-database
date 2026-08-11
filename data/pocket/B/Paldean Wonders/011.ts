import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";

const card: Card = {
  set: Set,
  name: {
		fr: "Virevorreur",
		en: "Brambleghast",
		es: "Brambleghast",
		it: "Brambleghast",
		pt: "Brambleghast",
		de: "Horrerba"
  },
  illustrator: "KEIICHIRO ITO",
  rarity: "Two Diamond",
  category: "Pokemon",
  hp: 100,
  types: ["Grass"],
  dexId: [947],
  evolveFrom: {
		fr: "Virovent",
		en: "Bramblin",
		es: "Bramblin",
		it: "Bramblin",
		pt: "Bramblin",
		de: "Weherba"
  },
  description: {
    en: "Brambleghast wanders around arid regions. On rare occasions, mass outbreaks of these Pokémon will bury an entire town.",
  },
  stage: "Stage1",
  attacks: [
    {
      name: {
				en: "Continuous Tumble",
				fr: "Roulade Continue",
				es: "Avalancha Continua",
				it: "Capriole",
				pt: "Tombo Contínuo",
				de: "Dauerrollen"
      },
      damage: "60×",
      cost: ["Grass", "Colorless"],
      effect: {
        en: "Flip a coin until you get tails. This attack does 60 damage for each heads.",
				fr: "Lancez une pièce jusqu’à ce que vous obteniez un côté pile. Cette attaque inflige 60 dégâts pour chaque côté face.",
				es: "Lanza 1 moneda hasta que salga cruz. Este ataque hace 60 puntos de daño por cada cara.",
				it: "Lancia una moneta finché non esce croce. Questo attacco infligge 60 danni ogni volta che esce testa.",
				pt: "Jogue 1 moeda até sair coroa. Este ataque causa 60 pontos de dano para cada cara.",
				de: "Wirf so lang 1 Münze, bis zum ersten Mal das Ergebnis Zahl kommt. Diese Attacke fügt 60 Schadenspunkte pro Kopf zu."
      },
    },
  ],
  weaknesses: [
    {
      type: "Fire",
      value: "+20",
    },
  ],
  retreat: 2,
};

export default card;