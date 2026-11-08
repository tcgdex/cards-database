import { Card } from "models/database/card"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [294],
	set: Set,

	name: {
		'en-us': "Loudred",
		'fr-fr': "Ramboum",
		'es-es': "Loudred",
		'it-it': "Loudred",
		'pt-br': "Loudred",
		'de-de': "Krakeelo"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],
	evolveFrom: {
		'en-us': "Whismur",
		'fr-fr': "Chuchmur",
		'es-es': "Whismur",
		'it-it': "Whismur",
		'pt-br': "Whismur",
		'de-de': "Flurmel"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Body Slam",
			'fr-fr': "Plaquage",
			'es-es': "Golpe Cuerpo",
			'it-it': "Corposcontro",
			'pt-br': "Pancada Corporal",
			'de-de': "Bodyslam"
		},

		effect: {
			'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
			'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
			'pt-br': "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente agora estará Paralisado.",
			'de-de': "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert."
		},

		damage: 10
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Mega Impact",
			'fr-fr': "Méga Impact",
			'es-es': "Megaimpacto",
			'it-it': "Mega Impatto",
			'pt-br': "Mega-impacto",
			'de-de': "Mega-Einschlag"
		},

		damage: 40
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	description: {
		'en-us': "The force of this Pokémon's loud voice isn't just the sound—it's also the wave of air pressure that blows opponents away and damages them.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 740689,
				tcgplayer: 523830,
				cardtrader: 265255
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 740689,
				tcgplayer: 523830,
				cardtrader: 265255
			}
		},
	],

	illustrator: "Yukiko Baba",

	
}

export default card
