import { Card } from "../../../interfaces"
import Set from "../Stellar Crown"

const card: Card = {
	dexId: [927],
	set: Set,

	name: {
		en: "Dachsbun ex",
		fr: "Briochien-ex",
		es: "Dachsbun ex",
		it: "Dachsbun-ex",
		pt: "Dachsbun ex",
		de: "Backel-ex"
	},

	rarity: "Special illustration rare",
	category: "Pokemon",
	hp: 250,
	types: ["Psychic"],
	evolveFrom: {
		en: "Fidough",
		fr: "Pâtachiot",
		es: "Fidough",
		it: "Fidough",
		pt: "Fidough",
		de: "Hefel"
	},
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Time to Chow Down",
			fr: "J'ai les Crocs",
			es: "Hora de Zampar",
			it: "A Pancia Piena",
			pt: "Tá na Mesa, Pessoal",
			de: "Zeit zum Futtern"
		},

		effect: {
			en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may heal all damage from each of your Evolution Pokémon. If you healed any damage in this way, discard all Energy from those Pokémon.",
			fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l'un de vos Pokémon pendant votre tour, vous pouvez soigner tous les dégâts de chacun de vos Pokémon Évolutifs. Si vous avez soigné des dégâts de cette façon, défaussez toutes les Énergies de ces Pokémon.",
			es: "Cuando juegas este Pokémon de tu mano para hacer evolucionar a uno de tus Pokémon durante tu turno, puedes curar todos los puntos de daño a cada uno de tus Pokémon Evolución. Si has curado algún punto de daño de esta manera, descarta todas las Energías de los Pokémon que hayas curado.",
			it: "Quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon durante il tuo turno, puoi curare ciascuno dei tuoi Pokémon Evoluzione da tutti i danni. Se hai curato dei danni in questo modo, scarta tutte le Energie dai Pokémon che hai curato.",
			pt: "Quando você jogar este Pokémon da sua mão para evoluir 1 dos seus Pokémon durante o seu turno, você poderá curar todo o dano de cada um dos seus Pokémon de Evolução. Se você curou qualquer dano desta forma, descarte todas as Energias daqueles Pokémon.",
			de: "Wenn du dieses Pokémon aus deiner Hand spielst, um 1 deiner Pokémon während deines Zuges zu entwickeln, kannst du allen Schaden bei jedem deiner Entwicklungs-Pokémon heilen. Wenn du auf diese Weise Schaden geheilt hast, lege alle Energien von jenen Pokémon auf deinen Ablagestapel."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Wonder Shine",
			fr: "Éclat Merveilleux",
			es: "Brillo Prodigioso",
			it: "Luce Meraviglia",
			pt: "Brilho Encantado",
			de: "Wunderglanz"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Confused.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			es: "El Pokémon Activo de tu rival pasa a estar Confundido.",
			it: "Il Pokémon attivo del tuo avversario viene confuso.",
			pt: "O Pokémon Ativo do seu oponente agora está Confuso.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
		},

		damage: 130
	}],

	retreat: 2,
	regulationMark: "H",

	variants: {
		normal: false,
		reverse: false
	},

	illustrator: "Yuu Nishida",

	thirdParty: {
		cardmarket: 785921
	}
}

export default card
