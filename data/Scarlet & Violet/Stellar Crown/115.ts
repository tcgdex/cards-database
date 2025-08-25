import { Card } from "../../../interfaces"
import Set from "../Stellar Crown"

const card: Card = {
	dexId: [164],
	set: Set,

	name: {
		en: "Noctowl",
		fr: "Noarfang",
		es: "Noctowl",
		it: "Noctowl",
		pt: "Noctowl",
		de: "Noctuh"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Jewel Seeker",
			fr: "Chercheur de Joyaux",
			es: "Buscajoyas",
			it: "Cercatore di Gemme",
			pt: "Buscar Joias",
			de: "Juwelenjäger"
		},

		effect: {
			en: "Once during your turn, when you play this Pokémon from your hand to evolve 1 of your Pokémon, if you have any Tera Pokémon in play, you may search your deck for up to 2 Trainer cards, reveal them, and put them into your hand. Then, shuffle your deck.",
			fr: "Une fois pendant votre tour, lorsque vous jouez ce Pokémon de votre main pour faire évoluer l'un de vos Pokémon, si vous avez au moins un Pokémon Téracristal en jeu, vous pouvez chercher dans votre deck jusqu'à 2 cartes Dresseur, les montrer, puis les ajouter à votre main. Mélangez ensuite votre deck.",
			es: "Una vez durante tu turno, cuando juegas este Pokémon de tu mano para hacer evolucionar a uno de tus Pokémon, si tienes algún Pokémon Teracristal en juego, puedes buscar en tu baraja hasta 2 cartas de Entrenador, enseñarlas y ponerlas en tu mano. Después, baraja las cartas de tu baraja.",
			it: "Una sola volta durante il tuo turno, quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon, se hai dei Pokémon Teracristal in gioco, puoi cercare nel tuo mazzo fino a due carte Allenatore, mostrarle e aggiungerle alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
			pt: "Uma vez durante o seu turno, quando você jogar este Pokémon da sua mão para evoluir 1 dos seus Pokémon, se você tiver algum Pokémon Tera em jogo, você poderá procurar por até 2 cartas de Treinador no seu baralho, revelá-las e colocá-las na sua mão. Em seguida, embaralhe o seu baralho.",
			de: "Einmal während deines Zuges, wenn du dieses Pokémon aus deiner Hand spielst, um 1 deiner Pokémon zu entwickeln, kannst du, wenn du mindestens 1 Terakristall-Pokémon im Spiel hast, dein Deck nach bis zu 2 Trainerkarten durchsuchen, sie deinem Gegner zeigen und auf deine Hand nehmen. Mische anschließend dein Deck."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Speed Wing",
			fr: "Ailes Vives",
			es: "Ala Veloz",
			it: "Alaveloce",
			pt: "Asa da Velocidade",
			de: "Turboschwinge"
		},

		damage: 60
	}],

	retreat: 1,
	regulationMark: "H",

	variants: {
		normal: false
	},

	illustrator: "matazo",

	thirdParty: {
		cardmarket: 785969
	}
}

export default card
