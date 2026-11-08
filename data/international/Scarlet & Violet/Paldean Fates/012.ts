import { Card } from "models/database/card"
import Set from "../Paldean Fates"

const card: Card = {
	dexId: [323],
	set: Set,

	name: {
		'en-us': "Camerupt",
		'fr-fr': "Camérupt",
		'es-es': "Camerupt",
		'it-it': "Camerupt",
		'pt-br': "Camerupt",
		'de-de': "Camerupt"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],
	evolveFrom: {
		'en-us': "Numel",
		'fr-fr': "Chamallot",
		'es-es': "Numel",
		'it-it': "Numel",
		'pt-br': "Numel",
		'de-de': "Camaub"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Fire"],

		name: {
			'en-us': "Super Singe",
			'fr-fr': "Super Roussi",
			'es-es': "Superquemadura",
			'it-it': "Super Scottata",
			'pt-br': "Superchamuscada",
			'de-de': "Super-Versengung"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Burned.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Quemado.",
			'it-it': "Il Pokémon attivo del tuo avversario viene bruciato.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Queimado.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verbrannt."
		}
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			'en-us': "Cinder Cannon",
			'fr-fr': "Canon à Braises",
			'es-es': "Cañón de Ceniza",
			'it-it': "Cannonbrace",
			'pt-br': "Canhão de Cinzas",
			'de-de': "Zunderkanone"
		},

		effect: {
			'en-us': "You may discard a {F} Energy from this Pokémon. If you do, this attack does 120 more damage.",
			'fr-fr': "Vous pouvez défausser une Énergie {F} de ce Pokémon. Dans ce cas, cette attaque inflige 120 dégâts supplémentaires.",
			'es-es': "Puedes descartar 1 Energía {F} de este Pokémon. Si lo haces, este ataque hace 120 puntos de daño más.",
			'it-it': "Puoi scartare un'Energia {F} da questo Pokémon. Se lo fai, questo attacco infligge 120 danni in più.",
			'pt-br': "Você pode descartar uma Energia {F} deste Pokémon. Se fizer isto, este ataque causará 120 pontos de dano a mais.",
			'de-de': "Du kannst 1 {F}-Energie von diesem Pokémon auf deinen Ablagestapel legen. Wenn du das machst, fügt diese Attacke 120 Schadenspunkte mehr zu."
		},

		damage: "120+"
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 751538,
				tcgplayer: 534153,
				cardtrader: 274196
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 751538,
				tcgplayer: 534153,
				cardtrader: 274196
			}
		},
	],

	illustrator: "satoma",

	description: {
		'en-us': "It lives in the crater of a volcano. It is well known that the humps on its back erupt every 10 years.",
	},

}

export default card
