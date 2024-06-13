import { Card } from "../../../interfaces"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [350],
	set: Set,

	name: {
		en: "Milotic",
		fr: "Milobellus",
		es: "Milotic",
		it: "Milotic",
		pt: "Milotic",
		de: "Milotic"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Lifeboat",
			fr: "Bouée de Sauvetage",
			es: "Bote Salvavidas",
			it: "Scialuppa",
			pt: "Bote Salva-vidas",
			de: "Rettungsboot"
		},

		effect: {
			en: "Once during your turn, when you play this Pokémon from your hand to evolve 1 of your Pokémon, you may use this Ability. Each player puts a Basic Pokémon from their discard pile onto their Bench. (Your opponent puts a Basic Pokémon onto their Bench first.)",
			fr: "Une fois pendant votre tour, lorsque vous jouez ce Pokémon de votre main pour faire évoluer l'un de vos Pokémon, vous pouvez utiliser ce talent. Chaque joueur place un Pokémon de base de sa pile de défausse sur son Banc. (Votre adversaire place un Pokémon de base sur son Banc en premier.)",
			es: "Una vez durante tu turno, cuando juegas este Pokémon de tu mano para hacer evolucionar a uno de tus Pokémon, puedes usar esta habilidad. Cada jugador pone 1 Pokémon Básico de su pila de descartes en su Banca. (Tu rival pone 1 Pokémon Básico en su Banca en primer lugar).",
			it: "Una sola volta durante il tuo turno, quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon, puoi usare questa abilità. Ciascun giocatore prende un Pokémon Base dalla propria pila degli scarti e lo mette nella propria panchina. Il tuo avversario mette un Pokémon Base nella sua panchina per primo.",
			pt: "Uma vez durante o seu turno, quando você jogar este Pokémon da sua mão para evoluir 1 dos seus Pokémon, você poderá usar esta Habilidade. Cada jogador coloca um Pokémon Básico da própria pilha de descarte no próprio Banco. (O seu oponente coloca um Pokémon Básico no Banco dele primeiro.)",
			de: "Einmal während deines Zuges, wenn du dieses Pokémon aus deiner Hand spielst, um 1 deiner Pokémon zu entwickeln, kannst du diese Fähigkeit einsetzen. Jeder Spieler legt 1 Basis-Pokémon aus seinem Ablagestapel auf seine Bank. (Dein Gegner legt als Erster ein Basis-Pokémon auf seine Bank.)"
		}
	}],

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			en: "Hypno Splash",
			fr: "Hypnoplouf",
			es: "Salpicadura Hipnótica",
			it: "Ipnospruzzo",
			pt: "Explosão Hipnótica",
			de: "Hypnospritzer"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Asleep.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
			es: "El Pokémon Activo de tu rival pasa a estar Dormido.",
			it: "Il Pokémon attivo del tuo avversario viene addormentato.",
			pt: "O Pokémon Ativo do seu oponente agora está Adormecido.",
			de: "Das Aktive Pokémon deines Gegners schläft jetzt."
		},

		damage: 60
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card