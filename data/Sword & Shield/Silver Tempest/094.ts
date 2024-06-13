import { Card } from "../../../interfaces"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [344],
	set: Set,

	name: {
		en: "Claydol",
		fr: "Kaorine",
		es: "Claydol",
		it: "Claydol",
		pt: "Claydol",
		de: "Lepumentas"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],

	evolveFrom: {
		en: "Baltoy",
		fr: "Balbuto",
		es: "Baltoy",
		it: "Baltoy",
		pt: "Baltoy",
		de: "Puppance"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Mystery Charge",
			fr: "Charge Mystère",
			es: "Carga Misteriosa",
			it: "Carica Mistero",
			pt: "Carga Misteriosa",
			de: "Geheimnisvolle Ladung"
		},

		effect: {
			en: "You can use this Ability only if you have no Supporter cards in your discard pile. Once during your turn, you may attach a Fighting Energy card from your discard pile to 1 of your Pokémon.",
			fr: "Vous ne pouvez utiliser ce talent que si vous n'avez pas de carte Supporter dans votre pile de défausse. Une fois pendant votre tour, vous pouvez attacher une carte Énergie Fighting de votre pile de défausse à l'un de vos Pokémon.",
			es: "Puedes usar esta habilidad solo si no tienes ninguna carta de Partidario en tu pila de descartes. Una vez durante tu turno, puedes unir 1 carta de Energía Fighting de tu pila de descartes a 1 de tus Pokémon.",
			it: "Puoi usare questa abilità solo se non hai carte Aiuto nella tua pila degli scarti. Una sola volta durante il tuo turno, puoi assegnare a uno dei tuoi Pokémon una carta Energia Fighting dalla tua pila degli scarti.",
			pt: "Você só pode usar esta Habilidade se não tiver cartas de Apoiador na sua pilha de descarte. Uma vez durante o seu turno, você poderá ligar 1 carta de Energia Fighting da sua pilha de descarte a 1 dos seus Pokémon.",
			de: "Du kannst diese Fähigkeit nur einsetzen, wenn du keine Unterstützerkarten in deinem Ablagestapel hast. Einmal während deines Zuges kannst du 1 Fighting-Energiekarte aus deinem Ablagestapel an 1 deiner Pokémon anlegen."
		}
	}],

	attacks: [{
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			en: "Spinning Attack",
			fr: "Attaque Tournante",
			es: "Ataque Giratorio",
			it: "Attacco Rotante",
			pt: "Ataque Giratório",
			de: "Rundumangriff"
		},

		damage: 70
	}],

	retreat: 2,
	regulationMark: "F",
	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card