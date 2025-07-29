import { Card } from '../../../interfaces'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		en: "Gliscor",
		fr: "Scorvol",
		es: "Gliscor",
		it: "Gliscor",
		pt: "Gliscor",
		de: "Skorgro"
	},

	illustrator: "Yoshinobu Saito",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		472,
	],

	hp: 110,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Gligar",
		fr: "Scorplane",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Finishing Stinger",
				fr: "Dard Final",
				es: "Aguijón Definitivo",
				it: "Puntura Finale",
				pt: "Ferrão Final",
				de: "Finalstachel"
			},
			effect: {
				en: "If your opponent’s Active Pokémon has no damage counters on it before this attack does damage, this attack does nothing.",
				fr: "Si le Pokémon Actif de votre adversaire n’a aucun marqueur de dégâts avant que cette attaque n’inflige des dégâts, cette attaque ne fait rien.",
				es: "Si el Pokémon Activo de tu rival no tiene ningún contador de daño sobre él antes de que este ataque inflija daño, este ataque no hace nada.",
				it: "Se il Pokémon attivo del tuo avversario non ha segnalini danno prima che questo attacco infligga danni, questo attacco non ha effetto.",
				pt: "Se o Pokémon Ativo do seu oponente não tiver nenhum contador de dano nele antes deste ataque causar dano, este ataque não fará nada.",
				de: "Wenn auf dem Aktiven Pokémon deines Gegners keine Schadensmarken liegen, bevor diese Attacke Schaden zufügt, hat diese Attacke keine Auswirkungen."
			},
			damage: 70,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Guillotine",
				fr: "Guillotine",
				es: "Guillotina",
				it: "Ghigliottina",
				pt: "Guilhotina",
				de: "Guillotine"
			},

			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 297529
	}
}

export default card
