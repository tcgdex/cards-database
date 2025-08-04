import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Genesect V",
		fr: "Genesect V",
		es: "Genesect V",
		it: "Genesect V",
		pt: "Genesect V",
		de: "Genesect V"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 190,
	types: ["Metal"],
	stage: "Basic",
	suffix: "V",
	retreat: 2,
	regulationMark: "E",
	illustrator: "Akira Komayama",

	abilities: [{
		type: "Ability",

		name: {
			en: "Fusion Strike System",
			fr: "Système Poing de Fusion",
			de: "Fusionsangriff-System",
			es: "Sistema Golpe Fusión",
			pt: "Sistema Golpe Fusão",
			it: "Sistema Colpo Fusione"
		},

		effect: {
			en: "Once during your turn, you may draw cards until you have as many cards in your hand as you have Fusion Strike Pokémon in play.",
			fr: "Une fois pendant votre tour, vous pouvez piocher des cartes jusqu'à en avoir autant en main que vous avez de Pokémon Poing de Fusion en jeu.",
			de: "Einmal während deines Zuges kannst du so lange Karten ziehen, bis du so viele Karten auf deiner Hand hast, wie du Fusionsangriff-Pokémon im Spiel hast.",
			es: "Una vez durante tu turno, puedes robar cartas hasta que tengas tantas cartas en tu mano como Pokémon Golpe Fusión tengas en juego.",
			pt: "Uma vez durante o seu turno, você poderá comprar cartas até ter o mesmo número de cartas na sua mão do que os Pokémon Golpe Fusão que você tem em jogo.",
			it: "Una sola volta durante il tuo turno, puoi pescare fino ad avere in mano un numero di carte uguale a quello dei tuoi Pokémon Colpo Fusione in gioco."
		}
	}],

	attacks: [{
		cost: ["Metal", "Metal", "Colorless"],

		name: {
			en: "Techno Blast",
			fr: "Techno-Buster",
			de: "Techblaster",
			es: "Tecno Shock",
			pt: "Rajada Tecnológica",
			it: "Tecnobotto"
		},

		damage: 210,

		effect: {
			en: "During your next turn, this Pokémon can't attack.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			de: "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen.",
			es: "Durante tu próximo turno, este Pokémon no puede atacar.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá atacar.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può attaccare."
		}
	}],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 582813,
		tcgplayer: 253155
	}
}

export default card