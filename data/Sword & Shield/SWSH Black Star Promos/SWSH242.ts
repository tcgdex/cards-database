import { Card } from "../../../interfaces"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [764],
	set: Set,

	name: {
		fr: "Guérilande",
		de: "Curelei",
		es: "Comfey",
		pt: "Comfey",
		it: "Comfey",
		en: "Comfey"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			fr: "Sélection Florale",
			de: "Blumenauslese",
			es: "Selección Floral",
			pt: "Colheita de Flores",
			it: "Fiorescelta",
			en: "Flower Selecting"
		},

		effect: {
			fr: "Une fois pendant votre tour, si ce Pokémon est sur le Poste Actif, vous pouvez regarder les 2 cartes du dessus de votre deck, puis ajouter l'une d'elles à votre main. Placez l'autre carte dans la Zone Perdue.",
			de: "Einmal während deines Zuges, wenn dieses Pokémon in der Aktiven Position ist, kannst du dir die obersten 2 Karten deines Decks anschauen und 1 von ihnen auf deine Hand nehmen. Lege die andere Karte ins Nirgendwo.",
			es: "Una vez durante tu turno, si este Pokémon está en el Puesto Activo, puedes mirar las 2 primeras cartas de tu baraja y poner 1 de ellas en tu mano. Pon la otra carta en la Zona Perdida.",
			pt: "Uma vez durante o seu turno, se este Pokémon estiver no Campo Ativo, você poderá olhar as 2 cartas de cima do seu baralho e colocar 1 delas na sua mão. Coloque a outra carta na Zona Perdida.",
			it: "Una sola volta durante il tuo turno, se questo Pokémon è in posizione attiva, puoi guardare le prime due carte del tuo mazzo e aggiungerne una alle carte che hai in mano. Metti l'altra carta nell'area perduta.",
			en: "Once during your turn, if this Pokémon is in the Active Spot, you may look at the top 2 cards of your deck and put 1 of them into your hand. Put the other card in the Lost Zone."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			fr: "Attaque Tournante",
			de: "Rundumangriff",
			es: "Ataque Giratorio",
			pt: "Ataque Giratório",
			it: "Attacco Rotante",
			en: "Spinning Attack"
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "F",

	description: {
		en: "Comfey picks flowers with its vine and decorates itself with them. For some reason, flowers won't wither once they're attached to a Comfey."
	}
}

export default card