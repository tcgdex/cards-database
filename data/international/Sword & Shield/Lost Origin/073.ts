import { Card } from "models/database/card"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [354],
	set: Set,

	name: {
		'en-us': "Banette",
		'fr-fr': "Branette",
		'es-es': "Banette",
		'it-it': "Banette",
		'pt-br': "Banette",
		'de-de': "Banette"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	hp: 100,
	types: ["Psychic"],

	evolveFrom: {
		'en-us': "Shuppet",
		'fr-fr': "Polichombr",
		'es-es': "Shuppet",
		'it-it': "Shuppet",
		'pt-br': "Shuppet",
		'de-de': "Shuppet"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Puppet Offering",
			'fr-fr': "Offrande Pantomime",
			'es-es': "Ofrenda del Títere",
			'it-it': "Offerta Pupazzo",
			'pt-br': "Oferenda Fantoche",
			'de-de': "Puppenopfer"
		},

		effect: {
			'en-us': "Once during your turn, you may put a Supporter card from your discard pile into your hand. If you do, put this Pokémon in the Lost Zone. (Discard all attached cards.)",
			'fr-fr': "Une fois pendant votre tour, vous pouvez ajouter une carte Supporter de votre pile de défausse à votre main. Dans ce cas, placez ce Pokémon dans la Zone Perdue. (Défaussez toutes les cartes attachées.)",
			'es-es': "Una vez durante tu turno, puedes poner 1 carta de Partidario de tu pila de descartes en tu mano. Si lo haces, pon este Pokémon en la Zona Perdida. (Descarta todas las cartas unidas a él).",
			'it-it': "Una sola volta durante il tuo turno, puoi prendere una carta Aiuto dalla tua pila degli scarti e aggiungerla alle carte che hai in mano. Se lo fai, metti questo Pokémon nell'area perduta. Scarta tutte le carte assegnate.",
			'pt-br': "Uma vez durante o seu turno, você poderá colocar 1 carta de Apoiador da sua pilha de descarte na sua mão. Se fizer isto, coloque este Pokémon na Zona Perdida (descarte todas as cartas ligadas a ele).",
			'de-de': "Einmal während deines Zuges kannst du 1 Unterstützerkarte aus deinem Ablagestapel auf deine Hand nehmen. Wenn du das machst, lege dieses Pokémon ins Nirgendwo. (Lege alle angelegten Karten auf deinen Ablagestapel.)"
		}
	}],

	attacks: [{
		cost: ["Psychic", "Psychic"],

		name: {
			'en-us': "Spooky Shot",
			'fr-fr': "Tir Effrayant",
			'es-es': "Disparo Embrujado",
			'it-it': "Colpomistero",
			'pt-br': "Tiro Assustador",
			'de-de': "Spukschuss"
		},

		damage: 50
	}],

	retreat: 1,
	regulationMark: "F",


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 674084,
				tcgplayer: 283951
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 674084,
				tcgplayer: 283951
			}
		},
	],
}

export default card
