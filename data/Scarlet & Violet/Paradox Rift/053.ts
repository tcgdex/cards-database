import { Card } from "../../../interfaces"
import Set from "../Paradox Rift"

const card: Card = {
	set: Set,

	name: {
		en: "Wugtrio",
		fr: "Triopikeau",
		es: "Wugtrio",
		it: "Wugtrio",
		pt: "Wugtrio",
		de: "Schligdri"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Suddenly Select",
			fr: "Choix Impromptu",
			es: "Selección Repentina",
			it: "Scelta Improvvisa",
			pt: "Escolha Repentina",
			de: "Abrupte Auswahl"
		},

		effect: {
			en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may search your deck for up to 3 Pokémon Tool cards, reveal them, and put them into your hand. Then, shuffle your deck.",
			fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l'un de vos Pokémon pendant votre tour, vous pouvez chercher dans votre deck jusqu'à 3 cartes Outil Pokémon, les montrer, puis les ajouter à votre main. Mélangez ensuite votre deck.",
			es: "Cuando juegas este Pokémon de tu mano para hacer evolucionar a uno de tus Pokémon durante tu turno, puedes buscar en tu baraja hasta 3 cartas de Herramienta Pokémon, enseñarlas y ponerlas en tu mano. Después, baraja las cartas de tu baraja.",
			it: "Quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon durante il tuo turno, puoi cercare nel tuo mazzo fino a tre carte Oggetto Pokémon, mostrarle e aggiungerle alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
			pt: "Quando você jogar este Pokémon da sua mão para evoluir 1 dos seus Pokémon durante o seu turno, você poderá procurar por até 3 cartas de Ferramenta Pokémon no seu baralho, revelá-las e colocá-las na sua mão. Em seguida, embaralhe o seu baralho.",
			de: "Wenn du dieses Pokémon aus deiner Hand spielst, um 1 deiner Pokémon während deines Zuges zu entwickeln, kannst du dein Deck nach bis zu 3 Pokémon-Ausrüstungen durchsuchen, sie deinem Gegner zeigen und sie auf deine Hand nehmen. Mische anschließend dein Deck."
		}
	}],

	attacks: [{
		cost: ["Water", "Water"],

		name: {
			en: "Triple Whip",
			fr: "Triple Fouet",
			es: "Triple Latigazo",
			it: "Triplafrustata",
			pt: "Chicote Triplo",
			de: "Tripelpeitsche"
		},

		effect: {
			en: "Flip 3 coins. This attack does 70 damage for each heads.",
			fr: "Lancez 3 pièces. Cette attaque inflige 70 dégâts pour chaque côté face.",
			es: "Lanza 3 monedas. Este ataque hace 70 puntos de daño por cada cara.",
			it: "Lancia tre volte una moneta. Questo attacco infligge 70 danni ogni volta che esce testa.",
			pt: "Jogue 3 moedas. Este ataque causa 70 pontos de dano para cada cara.",
			de: "Wirf 3 Münzen. Diese Attacke fügt 70 Schadenspunkte pro Kopf zu."
		},

		damage: "70×"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card