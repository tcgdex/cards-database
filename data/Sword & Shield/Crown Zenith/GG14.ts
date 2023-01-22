import { Card } from "../../../interfaces"
import Set from "../Crown Zenith"

const card: Card = {
	set: Set,

	name: {
		en: "Comfey",
		fr: "Guérilande",
		es: "Comfey",
		it: "Comfey",
		pt: "Comfey",
		de: "Curelei"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Flower Selecting",
			fr: "Sélection Florale",
			es: "Selección Floral",
			it: "Fiorescelta",
			pt: "Colheita de Flores",
			de: "Blumenauslese"
		},

		effect: {
			en: "Once during your turn, if this Pokémon is in the Active Spot, you may look at the top 2 cards of your deck and put 1 of them into your hand. Put the other card in the Lost Zone.",
			fr: "Une fois pendant votre tour, si ce Pokémon est sur le Poste Actif, vous pouvez regarder les 2 cartes du dessus de votre deck, puis ajouter l'une d'elles à votre main. Placez l'autre carte dans la Zone Perdue.",
			es: "Una vez durante tu turno, si este Pokémon está en el Puesto Activo, puedes mirar las 2 primeras cartas de tu baraja y poner 1 de ellas en tu mano. Pon la otra carta en la Zona Perdida.",
			it: "Una sola volta durante il tuo turno, se questo Pokémon è in posizione attiva, puoi guardare le prime due carte del tuo mazzo e aggiungerne una alle carte che hai in mano. Metti l'altra carta nell'area perduta.",
			pt: "Uma vez durante o seu turno, se este Pokémon estiver no Campo Ativo, você poderá olhar as 2 cartas de cima do seu baralho e colocar 1 delas na sua mão. Coloque a outra carta na Zona Perdida.",
			de: "Einmal während deines Zuges, wenn dieses Pokémon in der Aktiven Position ist, kannst du dir die obersten 2 Karten deines Decks anschauen und 1 von ihnen auf deine Hand nehmen. Lege die andere Karte ins Nirgendwo."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			en: "Spinning Attack",
			fr: "Attaque Tournante",
			es: "Ataque Giratorio",
			it: "Attacco Rotante",
			pt: "Ataque Giratório",
			de: "Rundumangriff"
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card