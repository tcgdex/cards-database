import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [12],
	set: Set,

	name: {
		'en-us': "Butterfree",
		'fr-fr': "Papilusion",
		'es-es': "Butterfree",
		'it-it': "Butterfree",
		'pt-br': "Butterfree",
		'de-de': "Smettbo"
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	evolveFrom: {
		'en-us': "Metapod",
		'fr-fr': "Chrysacier",
		'es-es': "Metapod",
		'it-it': "Metapod",
		'pt-br': "Metapod",
		'de-de': "Safcon"
	},

	stage: "Stage2",
	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "E",
	illustrator: "ryoma uratsuka",

	description: {
		'en-us': "It collects honey every day. It rubs honey onto the hairs on its legs to carry it back to its nest."
	},

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Tricolored Scales",
			'fr-fr': "Écailles Tricolores",
			'de-de': "Dreifarbiger Flügelstaub",
			'es-es': "Escamas Tricolores",
			'pt-br': "Escamas Tricolores",
			'it-it': "Scaglie Tricolori"
		},

		effect: {
			'en-us': "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may make your opponent's Active Pokémon Burned, Confused, and Poisoned.",
			'fr-fr': "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l'un de vos Pokémon pendant votre tour, vous pouvez laisser le Pokémon Actif de votre adversaire Brûlé, Confus et Empoisonné.",
			'de-de': "Wenn du dieses Pokémon aus deiner Hand spielst, um 1 deiner Pokémon während deines Zuges zu entwickeln, kannst du das Aktive Pokémon deines Gegners verbrennen, verwirren und vergiften.",
			'es-es': "Cuando juegas este Pokémon de tu mano para hacer evolucionar a 1 de tus Pokémon durante tu turno, puedes dejar al Pokémon Activo de tu rival Confundido, Envenenado y Quemado.",
			'pt-br': "Quando você jogar este Pokémon da sua mão para evoluir 1 dos seus Pokémon durante o seu turno, você poderá deixar o Pokémon Ativo do seu oponente Confuso, Envenenado e Queimado.",
			'it-it': "Quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon durante il tuo turno, puoi lasciare il Pokémon attivo del tuo avversario bruciato, confuso e avvelenato."
		}
	}],

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			'en-us': "Gust",
			'fr-fr': "Tornade",
			'de-de': "Windstoß",
			'es-es': "Tornado",
			'pt-br': "Lufada de Vento",
			'it-it': "Raffica"
		},

		damage: 90
	}],


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 582031,
				tcgplayer: 253073
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582031,
				tcgplayer: 253073
			}
		},
	],
}

export default card
