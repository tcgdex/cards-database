import { Card } from 'models/database/card'
import Set from '../Rebel Clash'

const card: Card = {
	dexId: [435],

	name: {
		'en-us': "Skuntank",
		'fr-fr': "Moufflair",
		'es-es': "Skuntank",
		'it-it': "Skuntank",
		'pt-br': "Skuntank",
		'de-de': "Skuntank"
	},

	illustrator: "sowsow",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	evolveFrom: {
		'en-us': "Stunky",
		'fr-fr': "Moufouette",
		'es-es': "Stunky",
		'it-it': "Stunky",
		'pt-br': "Stunky",
		'de-de': "Skunkapuh"
	},

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Slash",
				'fr-fr': "Tranche",
				'es-es': "Cuchillada",
				'it-it': "Lacerazione",
				'pt-br': "Talho",
				'de-de': "Schlitzer"
			},

			damage: 50,

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Poison Ring",
				'fr-fr': "Anneau de Poison",
				'es-es': "Anillo Venenoso",
				'it-it': "Velenanello",
				'pt-br': "Anel de Veneno",
				'de-de': "Giftring"
			},
			effect: {
				'en-us': "Your opponent's Active Pokémon is now Poisoned. During your opponent's next turn, the Defending Pokémon can't retreat.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Empoisonné. Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Envenenado. Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
				'it-it': "Il Pokémon attivo del tuo avversario viene avvelenato. Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Envenenado. Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar.",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt vergiftet. Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 3,
	hp: 120,
	types: ["Darkness"],
	regulationMark: "D",


	stage: "Stage1",

	description: {
		'en-us': "In its belly, it reserves stinky fluid that it shoots from its tail during battle. As this Pokémon's diet varies, so does the stench of its fluid."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 457983,
				tcgplayer: 213207
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 457983,
				tcgplayer: 213207
			}
		},
	],
}

export default card
