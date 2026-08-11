import { Card } from "models/database/card"
import Set from "../Journey Together"

const card: Card = {
	dexId: [778],
	set: Set,

	name: {
		'en-us': "Mimikyu ex",
		'fr-fr': "Mimiqui-ex",
		'es-es': "Mimikyu ex",
		'de-de': "Mimigma-ex",
		'it-it': "Mimikyu-ex",
		'pt-br': "Mimikyu ex",
		'es-mx': "Mimikyu ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 190,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			'en-us': "Mischievous Hands",
			'fr-fr': "Mains Malicieuses",
			'es-es': "Manos Traviesas",
			'de-de': "Dreiste Hände",
			'it-it': "Mani Birichine",
			'pt-br': "Mãos Maliciosas",
			'es-mx': "Manos Traviesas"
		},

		effect: {
			'en-us': "Choose 2 of your opponent's Pokémon and put 3 damage counters on each of them.",
			'fr-fr': "Choisissez 2 des Pokémon de votre adversaire, puis placez 3 marqueurs de dégâts sur chacun d'eux.",
			'es-es': "Elige 2 de los Pokémon de tu rival y pon 3 contadores de daño en cada uno de ellos.",
			'de-de': "Wähle 2 Pokémon deines Gegners und lege 3 Schadensmarken auf jedes von ihnen.",
			'it-it': "Scegli due dei Pokémon del tuo avversario e metti tre segnalini danno su ciascuno di essi.",
			'pt-br': "Escolha 2 dos Pokémon do seu oponente e coloque 3 contadores de dano em cada um deles.",
			'es-mx': "Elige 2 de los Pokémon de tu rival y pon 3 contadores de daño en cada uno de ellos."
		}
	}, {
		cost: ["Psychic", "Psychic", "Colorless"],

		name: {
			'en-us': "Ghostly Trip",
			'fr-fr': "Vision Spectrale",
			'es-es': "Zancadilla Fantasmal",
			'de-de': "Gruseltour",
			'it-it': "Sgambetto Spettrale",
			'pt-br': "Tropeço Fantasmagórico",
			'es-mx': "Tambaleo Fantasmal"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Confused.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt.",
			'it-it': "Il Pokémon attivo del tuo avversario viene confuso.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso.",
			'es-mx': "El Pokémon Activo de tu rival ahora está Confundido."
		},

		damage: 120
	}],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "H",
	suffix: "ex",
	illustrator: "PLANETA Igarashi",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 817221,
				tcgplayer: 623496
			}
		},
		{
			type: "holo",
			stamp: ["set-logo"],
			thirdParty: {
				cardmarket: 855660,
			}
		},
		{
			type: "holo",
			stamp: ["set-logo"],
			size: "jumbo",
			thirdParty: {
				cardmarket: 855661,
			}
		},
	],
}

export default card
