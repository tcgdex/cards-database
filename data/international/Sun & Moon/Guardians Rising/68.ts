import { Card } from 'models/database/card'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		'en-us': "Gliscor",
		'fr-fr': "Scorvol",
		'es-es': "Gliscor",
		'it-it': "Gliscor",
		'pt-br': "Gliscor",
		'de-de': "Skorgro"
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
		'en-us': "Gligar",
		'fr-fr': "Scorplane",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Finishing Stinger",
				'fr-fr': "Dard Final",
				'es-es': "Aguijón Definitivo",
				'it-it': "Puntura Finale",
				'pt-br': "Ferrão Final",
				'de-de': "Finalstachel"
			},
			effect: {
				'en-us': "If your opponent’s Active Pokémon has no damage counters on it before this attack does damage, this attack does nothing.",
				'fr-fr': "Si le Pokémon Actif de votre adversaire n’a aucun marqueur de dégâts avant que cette attaque n’inflige des dégâts, cette attaque ne fait rien.",
				'es-es': "Si el Pokémon Activo de tu rival no tiene ningún contador de daño sobre él antes de que este ataque inflija daño, este ataque no hace nada.",
				'it-it': "Se il Pokémon attivo del tuo avversario non ha segnalini danno prima che questo attacco infligga danni, questo attacco non ha effetto.",
				'pt-br': "Se o Pokémon Ativo do seu oponente não tiver nenhum contador de dano nele antes deste ataque causar dano, este ataque não fará nada.",
				'de-de': "Wenn auf dem Aktiven Pokémon deines Gegners keine Schadensmarken liegen, bevor diese Attacke Schaden zufügt, hat diese Attacke keine Auswirkungen."
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
				'en-us': "Guillotine",
				'fr-fr': "Guillotine",
				'es-es': "Guillotina",
				'it-it': "Ghigliottina",
				'pt-br': "Guilhotina",
				'de-de': "Guillotine"
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

	description: {
		'en-us': "It observes prey while hanging inverted from branches. When the chance presents itself, it swoops!",
	},

	thirdParty: {
		cardmarket: 297529,
		tcgplayer: 130978
	}
}

export default card
