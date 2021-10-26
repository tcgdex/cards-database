import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Motisma",
		en: "Rotom",
		es: "Rotom",
		it: "Rotom",
		pt: "Rotom",
		de: "Rotom"
	},

	illustrator: "kirisAki",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 80,
	types: ["Lightning"],

	abilities: [{
		type: "Ability",

		name: {
			fr: "Moti-Choix",
			en: "Roto Choice",
			es: "Elección Rotom",
			it: "Rotoscelta",
			pt: "Escolha Rotom",
			de: "Roto-Wahl"
		},

		effect: {
			fr: "Lorsque vous jouez ce Pokémon de votre main sur votre Banc pendant votre tour, vous pouvez chercher dans votre deck jusqu'à 2 cartes Objet dont le nom contient le mot « Moti », montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
			en: "When you play this Pokémon from your hand onto your Bench during your turn, you may search your deck for up to 2 Item cards that have the word \"Rotom\" in their name, reveal them, and put them into your hand. Then, shuffle your deck.",
			es: "Cuando juegas este Pokémon de tu mano a tu Banca durante tu turno, puedes buscar en tu baraja hasta 2 cartas de Objeto que tengan la palabra \"Rotom\" en su nombre, enseñarlas y ponerlas en tu mano. Después, baraja las cartas de tu baraja.",
			it: "Quando giochi questo Pokémon dalla tua mano e lo metti in panchina durante il tuo turno, puoi cercare nel tuo mazzo fino a due carte Strumento con “Rotom” nel nome, mostrarle e aggiungerle a quelle che hai in mano. Poi rimischia le carte del tuo mazzo.",
			pt: "Quando você jogar este Pokémon da sua mão para o seu Banco durante o seu turno, você poderá procurar por até 2 cartas de Item no seu baralho que tenham a palavra \"Rotom” em seu nome, revelá-las e colocá-las na sua mão. Em seguida, embaralhe o seu baralho.",
			de: "Wenn du dieses Pokémon während deines Zuges aus deiner Hand auf deine Bank spielst, kannst du dein Deck nach bis zu 2 Itemkarten durchsuchen, bei denen das Wort „Rotom“ zum Namen gehört, sie deinem Gegner zeigen und auf deine Hand nehmen. Mische anschließend dein Deck."
		}
	}],

	attacks: [{
		name: {
			fr: "Éclair",
			en: "Thunder Shock",
			es: "Impactrueno",
			it: "Tuonoshock",
			pt: "Trovoada de Choques",
			de: "Donnerschock"
		},

		effect: {
			fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
			it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
			pt: "Jogue 1 moeda. Se sair cara, o Pokémon Ativo do seu oponente ficará Paralisado.",
			de: "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert."
		},

		damage: 30,
		cost: ["Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D",
	stage: "Basic",

	description: {
		en: "One boy's invention led to the development of many different machines that take advantage of Rotom's unique capabilities."
	}
}

export default card
