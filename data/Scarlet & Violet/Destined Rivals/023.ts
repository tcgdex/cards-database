import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Arboliva",
		fr: "Arboliva",
		de: "Olithena",
		it: "Arboliva",
		es: "Arboliva",
		pt: "Arboliva"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	hp: 150,
	types: ["Grass"],
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Enriching Oil",
			fr: "Huile Enrichissante",
			de: "Anreicherndes Öl",
			it: "Olio Nutriente",
			es: "Aceite Nutritivo",
			pt: "Azeite Enriquecedor"
		},

		effect: {
			en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may heal all damage from 1 of your Pokémon.",
			fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l'un de vos Pokémon pendant votre tour, vous pouvez soigner tous les dégâts de l'un de vos Pokémon.",
			de: "Wenn du dieses Pokémon aus deiner Hand spielst, um 1 deiner Pokémon während deines Zuges zu entwickeln, kannst du allen Schaden bei 1 deiner Pokémon heilen.",
			it: "Quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon durante il tuo turno, puoi curare uno dei tuoi Pokémon da tutti i danni.",
			es: "Cuando juegas este Pokémon de tu mano para hacer evolucionar a uno de tus Pokémon durante tu turno, puedes curar todos los puntos de daño a uno de tus Pokémon.",
			pt: "Quando você jogar este Pokémon da sua mão para evoluir 1 dos seus Pokémon durante o seu turno, você poderá curar todo o dano de 1 dos seus Pokémon."
		}
	}],

	attacks: [{
		cost: ["Grass", "Grass", "Colorless"],

		name: {
			en: "Solar Beam",
			fr: "Lance-Soleil",
			de: "Solarstrahl",
			it: "Solarraggio",
			es: "Rayo Solar",
			pt: "Raio Solar"
		},

		damage: 150
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card