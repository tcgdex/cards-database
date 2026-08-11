import { Card } from "models/database/card"
import Set from "../151"

const card: Card = {
	dexId: [121],
	set: Set,

	name: {
		'fr-fr': "Staross",
		'en-us': "Starmie",
		'es-es': "Starmie",
		'it-it': "Starmie",
		'pt-br': "Starmie",
		'de-de': "Starmie"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],
	evolveFrom: {
		'fr-fr': "Stari",
		'en-us': "Staryu",
		'es-es': "Staryu",
		'it-it': "Staryu",
		'pt-br': "Staryu",
		'de-de': "Sterndu"
	},
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'fr-fr': "Comète Mystérieuse",
			'en-us': "Mysterious Comet",
			'es-es': "Cometa Misterioso",
			'it-it': "Cometa Misteriosa",
			'pt-br': "Cometa Misterioso",
			'de-de': "Geheimnisvoller Komet"
		},

		effect: {
			'fr-fr': "Une fois pendant votre tour, vous pouvez placer 2 marqueurs de dégâts sur l'un des Pokémon de votre adversaire. Si vous avez placé au moins un marqueur de dégâts de cette façon, défaussez ce Pokémon et toutes les cartes qui lui sont attachées.",
			'en-us': "Once during your turn, you may put 2 damage counters on 1 of your opponent's Pokémon. If you placed any damage counters in this way, discard this Pokémon and all attached cards.",
			'es-es': "Una vez durante tu turno, puedes poner 2 contadores de daño en uno de los Pokémon de tu rival. Si has puesto algún contador de daño de esta manera, descarta este Pokémon y todas las cartas unidas a él.",
			'it-it': "Una sola volta durante il tuo turno, puoi mettere due segnalini danno su uno dei Pokémon del tuo avversario. Se hai messo dei segnalini danno in questo modo, scarta questo Pokémon e tutte le carte a esso assegnate.",
			'pt-br': "Uma vez durante o seu turno, você poderá colocar 2 contadores de dano em 1 dos Pokémon do seu oponente. Se você colocou algum contador de dano desta forma, descarte este Pokémon e todas as cartas ligadas a ele.",
			'de-de': "Einmal während deines Zuges kannst du 2 Schadensmarken auf 1 Pokémon deines Gegners legen. Wenn du auf diese Weise mindestens 1 Schadensmarke platziert hast, lege dieses Pokémon und alle angelegten Karten auf deinen Ablagestapel."
		}
	}],

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			'fr-fr': "Attaque Rapide",
			'en-us': "Speed Attack",
			'es-es': "Ataque Fugaz",
			'it-it': "Attacco Veloce",
			'pt-br': "Ataque em Velocidade",
			'de-de': "Tempoangriff"
		},

		damage: 50
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "Starmie swims by spinning its body at high speed. As this Pokémon cruises through the ocean, it absorbs tiny plankton.",
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 733716,
				tcgplayer: 516684,
				cardtrader: 261622
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 733716,
				tcgplayer: 516684,
				cardtrader: 261622
			}
		},
	],

	illustrator: "Arai Kiriko",

	
}

export default card
