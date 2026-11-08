import { Card } from "models/database/card"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [764],
	set: Set,

	name: {
		'fr-fr': "Guérilande",
		'de-de': "Curelei",
		'es-es': "Comfey",
		'pt-br': "Comfey",
		'it-it': "Comfey",
		'en-us': "Comfey"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'fr-fr': "Sélection Florale",
			'de-de': "Blumenauslese",
			'es-es': "Selección Floral",
			'pt-br': "Colheita de Flores",
			'it-it': "Fiorescelta",
			'en-us': "Flower Selecting"
		},

		effect: {
			'fr-fr': "Une fois pendant votre tour, si ce Pokémon est sur le Poste Actif, vous pouvez regarder les 2 cartes du dessus de votre deck, puis ajouter l'une d'elles à votre main. Placez l'autre carte dans la Zone Perdue.",
			'de-de': "Einmal während deines Zuges, wenn dieses Pokémon in der Aktiven Position ist, kannst du dir die obersten 2 Karten deines Decks anschauen und 1 von ihnen auf deine Hand nehmen. Lege die andere Karte ins Nirgendwo.",
			'es-es': "Una vez durante tu turno, si este Pokémon está en el Puesto Activo, puedes mirar las 2 primeras cartas de tu baraja y poner 1 de ellas en tu mano. Pon la otra carta en la Zona Perdida.",
			'pt-br': "Uma vez durante o seu turno, se este Pokémon estiver no Campo Ativo, você poderá olhar as 2 cartas de cima do seu baralho e colocar 1 delas na sua mão. Coloque a outra carta na Zona Perdida.",
			'it-it': "Una sola volta durante il tuo turno, se questo Pokémon è in posizione attiva, puoi guardare le prime due carte del tuo mazzo e aggiungerne una alle carte che hai in mano. Metti l'altra carta nell'area perduta.",
			'en-us': "Once during your turn, if this Pokémon is in the Active Spot, you may look at the top 2 cards of your deck and put 1 of them into your hand. Put the other card in the Lost Zone."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			'fr-fr': "Attaque Tournante",
			'de-de': "Rundumangriff",
			'es-es': "Ataque Giratorio",
			'pt-br': "Ataque Giratório",
			'it-it': "Attacco Rotante",
			'en-us': "Spinning Attack"
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
		'en-us': "Comfey picks flowers with its vine and decorates itself with them. For some reason, flowers won't wither once they're attached to a Comfey."
	},

	thirdParty: {
		cardmarket: 665985
	}
}

export default card
