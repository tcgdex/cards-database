import { Card } from 'models/database/card'
import Set from '../Darkness Ablaze'

const card: Card = {
	dexId: [89],

	name: {
		'en-us': "Muk",
		'fr-fr': "Grotadmorv",
		'es-es': "Muk",
		'it-it': "Muk",
		'pt-br': "Muk",
		'de-de': "Sleimok"
	},

	illustrator: "Eri Yamaki",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 140,

	types: [
		"Darkness",
	],

	evolveFrom: {
		'en-us': "Grimer",
		'fr-fr': "Tadmorv",
		'es-es': "Grimer",
		'it-it': "Grimer",
		'pt-br': "Grimer",
		'de-de': "Sleima"
	},

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				'en-us': "Triple Poison",
				'fr-fr': "Triple Poison",
				'es-es': "Veneno Triple",
				'it-it': "Triplo Veleno",
				'pt-br': "Veneno Triplo",
				'de-de': "Dreifachgift"
			},
			effect: {
				'en-us': "Your opponent's Active Pokémon is now Poisoned. During Pokémon Checkup, put 3 damage counters on that Pokémon instead of 1.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Empoisonné. Pendant le Contrôle Pokémon, placez 3 marqueurs de dégâts sur ce Pokémon-là au lieu d'un.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Envenenado. Durante el Chequeo Pokémon, pon 3 contadores de daño en ese Pokémon en vez de 1.",
				'it-it': "Il Pokémon attivo del tuo avversario viene avvelenato. Durante il controllo Pokémon, metti tre segnalini danno invece di uno su quel Pokémon.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Envenenado. Durante o Checape Pokémon, coloque 3 contadores de dano ao invés de 1 naquele Pokémon.",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt vergiftet. Lege beim Pokémon-Check 3 Schadensmarken anstelle von 1 Schadensmarke auf jenes Pokémon."
			},

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Sludge Whirlpool",
				'fr-fr': "Tourbillon de Boue",
				'es-es': "Torbellino de Residuos",
				'it-it': "Fangovortice",
				'pt-br': "Redemoinho de Lodo",
				'de-de': "Schlammstrudel"
			},

			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 4,
	regulationMark: "D",


	stage: "Stage1",

	description: {
		'en-us': "Because they scatter germs everywhere, they've long been targeted for extermination, leading to a steep decline in their population."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 483384,
				tcgplayer: 219402
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 483384,
				tcgplayer: 219402
			}
		},
	],
}

export default card
