import { Card } from "models/database/card"
import Set from "../Stellar Crown"

const card: Card = {
	dexId: [927],
	set: Set,

	name: {
		'en-us': "Dachsbun ex",
		'fr-fr': "Briochien-ex",
		'es-es': "Dachsbun ex",
		'it-it': "Dachsbun-ex",
		'pt-br': "Dachsbun ex",
		'de-de': "Backel-ex"
	},

	rarity: "Special illustration rare",
	category: "Pokemon",
	hp: 250,
	types: ["Psychic"],
	evolveFrom: {
		'en-us': "Fidough",
		'fr-fr': "Pâtachiot",
		'es-es': "Fidough",
		'it-it': "Fidough",
		'pt-br': "Fidough",
		'de-de': "Hefel"
	},
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Time to Chow Down",
			'fr-fr': "J'ai les Crocs",
			'es-es': "Hora de Zampar",
			'it-it': "A Pancia Piena",
			'pt-br': "Tá na Mesa, Pessoal",
			'de-de': "Zeit zum Futtern"
		},

		effect: {
			'en-us': "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may heal all damage from each of your Evolution Pokémon. If you healed any damage in this way, discard all Energy from those Pokémon.",
			'fr-fr': "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l'un de vos Pokémon pendant votre tour, vous pouvez soigner tous les dégâts de chacun de vos Pokémon Évolutifs. Si vous avez soigné des dégâts de cette façon, défaussez toutes les Énergies de ces Pokémon.",
			'es-es': "Cuando juegas este Pokémon de tu mano para hacer evolucionar a uno de tus Pokémon durante tu turno, puedes curar todos los puntos de daño a cada uno de tus Pokémon Evolución. Si has curado algún punto de daño de esta manera, descarta todas las Energías de los Pokémon que hayas curado.",
			'it-it': "Quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon durante il tuo turno, puoi curare ciascuno dei tuoi Pokémon Evoluzione da tutti i danni. Se hai curato dei danni in questo modo, scarta tutte le Energie dai Pokémon che hai curato.",
			'pt-br': "Quando você jogar este Pokémon da sua mão para evoluir 1 dos seus Pokémon durante o seu turno, você poderá curar todo o dano de cada um dos seus Pokémon de Evolução. Se você curou qualquer dano desta forma, descarte todas as Energias daqueles Pokémon.",
			'de-de': "Wenn du dieses Pokémon aus deiner Hand spielst, um 1 deiner Pokémon während deines Zuges zu entwickeln, kannst du allen Schaden bei jedem deiner Entwicklungs-Pokémon heilen. Wenn du auf diese Weise Schaden geheilt hast, lege alle Energien von jenen Pokémon auf deinen Ablagestapel."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Wonder Shine",
			'fr-fr': "Éclat Merveilleux",
			'es-es': "Brillo Prodigioso",
			'it-it': "Luce Meraviglia",
			'pt-br': "Brilho Encantado",
			'de-de': "Wunderglanz"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Confused.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido.",
			'it-it': "Il Pokémon attivo del tuo avversario viene confuso.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
		},

		damage: 130
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "H",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 786023,
				tcgplayer: 567476
			}
		},
	],

	suffix: "ex",
	illustrator: "Yuu Nishida",

}

export default card
