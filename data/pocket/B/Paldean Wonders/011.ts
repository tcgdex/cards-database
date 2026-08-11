import { Card } from "models/database/card";
import Set from "../Paldean Wonders";

const card: Card = {
  set: Set,
  name: {
		'fr-fr': "Virevorreur",
		'en-us': "Brambleghast",
		'es-es': "Brambleghast",
		'it-it': "Brambleghast",
		'pt-br': "Brambleghast",
		'de-de': "Horrerba"
  },
  illustrator: "KEIICHIRO ITO",
  rarity: "Two Diamond",
  category: "Pokemon",
  hp: 100,
  types: ["Grass"],
  dexId: [947],
  evolveFrom: {
		'fr-fr': "Virovent",
		'en-us': "Bramblin",
		'es-es': "Bramblin",
		'it-it': "Bramblin",
		'pt-br': "Bramblin",
		'de-de': "Weherba"
  },
  description: {
    en: "Brambleghast wanders around arid regions. On rare occasions, mass outbreaks of these Pokémon will bury an entire town.",
  },
  stage: "Stage1",
  attacks: [
    {
      name: {
				'en-us': "Continuous Tumble",
				'fr-fr': "Roulade Continue",
				'es-es': "Avalancha Continua",
				'it-it': "Capriole",
				'pt-br': "Tombo Contínuo",
				'de-de': "Dauerrollen"
      },
      damage: "60×",
      cost: ["Grass", "Colorless"],
      effect: {
        en: "Flip a coin until you get tails. This attack does 60 damage for each heads.",
				'fr-fr': "Lancez une pièce jusqu’à ce que vous obteniez un côté pile. Cette attaque inflige 60 dégâts pour chaque côté face.",
				'es-es': "Lanza 1 moneda hasta que salga cruz. Este ataque hace 60 puntos de daño por cada cara.",
				'it-it': "Lancia una moneta finché non esce croce. Questo attacco infligge 60 danni ogni volta che esce testa.",
				'pt-br': "Jogue 1 moeda até sair coroa. Este ataque causa 60 pontos de dano para cada cara.",
				'de-de': "Wirf so lang 1 Münze, bis zum ersten Mal das Ergebnis Zahl kommt. Diese Attacke fügt 60 Schadenspunkte pro Kopf zu."
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