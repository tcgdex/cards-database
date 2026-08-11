import { Card } from "models/database/card"
import Set from "../Brilliant Stars Trainer Gallery"

const card: Card = {
	dexId: [168],
	set: Set,

	name: {
		'en-us': "Ariados",
		'fr-fr': "Migalos",
		'es-es': "Ariados",
		'it-it': "Ariados",
		'pt-br': "Ariados",
		'de-de': "Ariados"
	},

	illustrator: "Shiburingaru",
	rarity: "Rare",
	category: "Pokemon",
	hp: 110,
	types: ["Darkness"],

	evolveFrom: {
		'en-us': "Spinarak",
		'fr-fr': "Mimigal",
		'es-es': "Spinarak",
		'it-it': "Spinarak",
		'pt-br': "Spinarak",
		'de-de': "Webarak"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Spider Net",
			'fr-fr': "Rets Arachnéens",
			'es-es': "Red de Araña",
			'it-it': "Rete del Ragno",
			'pt-br': "Rede de Aranha",
			'de-de': "Spinnengewebe"
		},

		effect: {
			'en-us': "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may switch 1 of your opponent's Benched Evolution Pokémon with their Active Pokémon.",
			'fr-fr': "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l'un de vos Pokémon pendant votre tour, vous pouvez échanger l'un des Pokémon évolutifs de Banc de votre adversaire contre son Pokémon Actif.",
			'es-es': "Cuando juegas este Pokémon de tu mano para hacer evolucionar a 1 de tus Pokémon durante tu turno, puedes cambiar 1 de los Pokémon Evolución en Banca de tu rival por su Pokémon Activo.",
			'it-it': "Quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon durante il tuo turno, puoi scambiare uno dei Pokémon Evoluzione nella panchina del tuo avversario con il suo Pokémon attivo.",
			'pt-br': "Quando você jogar este Pokémon da sua mão para evoluir 1 dos seus Pokémon durante o seu turno, você poderá trocar 1 dos Pokémon de Evolução no Banco do seu oponente pelo Pokémon Ativo dele(a).",
			'de-de': "Wenn du dieses Pokémon aus deiner Hand spielst, um 1 deiner Pokémon während deines Zuges zu entwickeln, kannst du 1 Entwicklungs-Pokémon auf der Bank deines Gegners gegen sein Aktives Pokémon austauschen."
		}
	}],

	attacks: [{
		cost: ["Darkness", "Colorless"],

		name: {
			'en-us': "Poison Sting",
			'fr-fr': "Dard-Venin",
			'es-es': "Picotazo Veneno",
			'it-it': "Velenospina",
			'pt-br': "Ferrão Venenoso",
			'de-de': "Giftstachel"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Poisoned.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Envenenado.",
			'it-it': "Il Pokémon attivo del tuo avversario viene avvelenato.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Envenenado.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt vergiftet."
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "D",


	description: {
		'en-us': "It spews threads from its mouth to catch its prey. When night falls, it leaves its web to go hunt aggressively.",
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 608741,
				tcgplayer: 264204
			}
		},
	],
}

export default card
