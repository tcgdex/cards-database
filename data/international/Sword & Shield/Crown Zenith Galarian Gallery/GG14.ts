import { Card } from "models/database/card"
import Set from "../Crown Zenith Galarian Gallery"

const card: Card = {
	dexId: [764],
	set: Set,

	name: {
		'en-us': "Comfey",
		'fr-fr': "Guérilande",
		'es-es': "Comfey",
		'it-it': "Comfey",
		'pt-br': "Comfey",
		'de-de': "Curelei"
	},

	illustrator: "Yano Keiji",
	rarity: "Rare",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Flower Selecting",
			'fr-fr': "Sélection Florale",
			'es-es': "Selección Floral",
			'it-it': "Fiorescelta",
			'pt-br': "Colheita de Flores",
			'de-de': "Blumenauslese"
		},

		effect: {
			'en-us': "Once during your turn, if this Pokémon is in the Active Spot, you may look at the top 2 cards of your deck and put 1 of them into your hand. Put the other card in the Lost Zone.",
			'fr-fr': "Une fois pendant votre tour, si ce Pokémon est sur le Poste Actif, vous pouvez regarder les 2 cartes du dessus de votre deck, puis ajouter l'une d'elles à votre main. Placez l'autre carte dans la Zone Perdue.",
			'es-es': "Una vez durante tu turno, si este Pokémon está en el Puesto Activo, puedes mirar las 2 primeras cartas de tu baraja y poner 1 de ellas en tu mano. Pon la otra carta en la Zona Perdida.",
			'it-it': "Una sola volta durante il tuo turno, se questo Pokémon è in posizione attiva, puoi guardare le prime due carte del tuo mazzo e aggiungerne una alle carte che hai in mano. Metti l'altra carta nell'area perduta.",
			'pt-br': "Uma vez durante o seu turno, se este Pokémon estiver no Campo Ativo, você poderá olhar as 2 cartas de cima do seu baralho e colocar 1 delas na sua mão. Coloque a outra carta na Zona Perdida.",
			'de-de': "Einmal während deines Zuges, wenn dieses Pokémon in der Aktiven Position ist, kannst du dir die obersten 2 Karten deines Decks anschauen und 1 von ihnen auf deine Hand nehmen. Lege die andere Karte ins Nirgendwo."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			'en-us': "Spinning Attack",
			'fr-fr': "Attaque Tournante",
			'es-es': "Ataque Giratorio",
			'it-it': "Attacco Rotante",
			'pt-br': "Ataque Giratório",
			'de-de': "Rundumangriff"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "Comfey picks flowers with its vine and decorates itself with them. For some reason, flowers won't wither once they're attached to a Comfey.",
	},

	

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 691893,
				tcgplayer: 478031
			}
		},
	],
}

export default card
