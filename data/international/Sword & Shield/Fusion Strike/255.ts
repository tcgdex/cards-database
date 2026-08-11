import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [649],
	set: Set,

	name: {
		'en-us': "Genesect V",
		'fr-fr': "Genesect V",
		'es-es': "Genesect V",
		'it-it': "Genesect V",
		'pt-br': "Genesect V",
		'de-de': "Genesect V"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 190,
	types: ["Metal"],
	stage: "Basic",
	suffix: "V",
	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
	],
	retreat: 2,
	regulationMark: "E",
	illustrator: "Akira Komayama",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Fusion Strike System",
			'fr-fr': "Système Poing de Fusion",
			'de-de': "Fusionsangriff-System",
			'es-es': "Sistema Golpe Fusión",
			'pt-br': "Sistema Golpe Fusão",
			'it-it': "Sistema Colpo Fusione"
		},

		effect: {
			'en-us': "Once during your turn, you may draw cards until you have as many cards in your hand as you have Fusion Strike Pokémon in play.",
			'fr-fr': "Une fois pendant votre tour, vous pouvez piocher des cartes jusqu'à en avoir autant en main que vous avez de Pokémon Poing de Fusion en jeu.",
			'de-de': "Einmal während deines Zuges kannst du so lange Karten ziehen, bis du so viele Karten auf deiner Hand hast, wie du Fusionsangriff-Pokémon im Spiel hast.",
			'es-es': "Una vez durante tu turno, puedes robar cartas hasta que tengas tantas cartas en tu mano como Pokémon Golpe Fusión tengas en juego.",
			'pt-br': "Uma vez durante o seu turno, você poderá comprar cartas até ter o mesmo número de cartas na sua mão do que os Pokémon Golpe Fusão que você tem em jogo.",
			'it-it': "Una sola volta durante il tuo turno, puoi pescare fino ad avere in mano un numero di carte uguale a quello dei tuoi Pokémon Colpo Fusione in gioco."
		}
	}],

	attacks: [{
		cost: ["Metal", "Metal", "Colorless"],

		name: {
			'en-us': "Techno Blast",
			'fr-fr': "Techno-Buster",
			'de-de': "Techblaster",
			'es-es': "Tecno Shock",
			'pt-br': "Rajada Tecnológica",
			'it-it': "Tecnobotto"
		},

		damage: 210,

		effect: {
			'en-us': "During your next turn, this Pokémon can't attack.",
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			'de-de': "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede atacar.",
			'pt-br': "Durante o seu próximo turno, este Pokémon não poderá atacar.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può attaccare."
		}
	}],


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 582991,
				tcgplayer: 253155
			}
		},
	],
}

export default card
