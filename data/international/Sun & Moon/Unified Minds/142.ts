import { Card } from 'models/database/card'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		'en-us': "Escavalier",
		'fr-fr': "Lançargot",
		'es-es': "Escavalier",
		'it-it': "Escavalier",
		'pt-br': "Escavalier",
		'de-de': "Cavalanzas"
	},

	illustrator: "Satoshi Shirai",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		589,
	],

	hp: 130,

	types: [
		"Metal",
	],

	evolveFrom: {
		'en-us': "Karrablast",
		'fr-fr': "Carabing",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				'en-us': "Discerning Spear",
				'fr-fr': "Épieu Distinct",
				'es-es': "Lanza Distinguida",
				'it-it': "Lancia Selettiva",
				'pt-br': "Lança Perspicaz",
				'de-de': "Anspruchsvoller Speer"
			},
			effect: {
				'en-us': "If your opponent’s Active Pokémon has no damage counters on it before this attack does damage, this attack does nothing.",
				'fr-fr': "Si le Pokémon Actif de votre adversaire n’a aucun marqueur de dégâts avant que cette attaque n’inflige des dégâts, cette attaque ne fait rien.",
				'es-es': "Si el Pokémon Activo de tu rival no tiene ningún contador de daño sobre él antes de que este ataque inflija daño, este ataque no hace nada.",
				'it-it': "Se il Pokémon attivo del tuo avversario non ha segnalini danno prima che questo attacco infligga danni, questo attacco non ha effetto.",
				'pt-br': "Se o Pokémon Ativo do seu oponente não tiver nenhum contador de dano nele antes deste ataque causar dano, este ataque não fará nada.",
				'de-de': "Wenn auf dem Aktiven Pokémon deines Gegners keine Schadensmarken liegen, bevor diese Attacke Schaden zufügt, hat diese Attacke keine Auswirkungen."
			},
			damage: 80,

		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Iron Lance",
				'fr-fr': "Lance de Fer",
				'es-es': "Lanza de Hierro",
				'it-it': "Spunzone Ferreo",
				'pt-br': "Lança de Ferro",
				'de-de': "Eisenlanze"
			},

			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 3,

	description: {
		'en-us': "Wearing the shell covering they stole from Shelmet, they defend themselves and attack with two lances.",
	},

	thirdParty: {
		cardmarket: 388507,
		tcgplayer: 195126
	}
}

export default card
