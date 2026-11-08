import { Card } from "models/database/card"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Shuckle",
		'fr-fr': "Caratroc",
		'de-de': "Pottrott",
		'it-it': "Shuckle",
		'es-es': "Shuckle",
		'pt-br': "Shuckle",
		'es-mx': "Shuckle"
	},

	illustrator: "Shinya Komatsu",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],
	stage: "Basic",
	dexId: [213],

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Fermented Juice",
			'fr-fr': "Jus Fermenté",
			'de-de': "Fermentierter Saft",
			'it-it': "Succo Fermentato",
			'es-es': "Zumo Fermentado",
			'pt-br': "Suco Choco",
			'es-mx': "Jugo Fermentado"
		},

		effect: {
			'en-us': "Once during your turn, if this Pokémon has any {G} Energy attached, you may use this Ability. Heal 30 damage from 1 of your Pokémon.",
			'fr-fr': "Une fois pendant votre tour, si ce Pokémon a au moins une Énergie {G} attachée, vous pouvez utiliser ce talent. Soignez 30 dégâts de l'un de vos Pokémon.",
			'de-de': "Einmal während deines Zuges, wenn an dieses Pokémon mindestens 1 {G}-Energie angelegt ist, kannst du diese Fähigkeit einsetzen. Heile 30 Schadenspunkte bei 1 deiner Pokémon.",
			'it-it': "Una sola volta durante il tuo turno, se questo Pokémon ha delle Energie {G} assegnate, puoi usare questa abilità. Cura uno dei tuoi Pokémon da 30 danni.",
			'es-es': "Una vez durante tu turno, si este Pokémon tiene alguna Energía {G} unida, puedes usar esta habilidad. Cura 30 puntos de daño a uno de tus Pokémon.",
			'pt-br': "Uma vez durante o seu turno, se este Pokémon tiver alguma Energia {G} ligada a ele, você poderá usar esta Habilidade. Cure 30 pontos de dano de 1 dos seus Pokémon.",
			'es-mx': "Una vez durante tu turno, si este Pokémon tiene alguna Energía {G} unida, puedes usar esta Habilidad. Cura 30 puntos de daño a 1 de tus Pokémon."
		}
	}],

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			'en-us': "Rollout",
			'fr-fr': "Roulade",
			'de-de': "Walzer",
			'it-it': "Rotolamento",
			'es-es': "Rodar",
			'pt-br': "Rolagem",
			'es-mx': "Rodada"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 851082,
				tcgplayer: 654350
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 851082,
				tcgplayer: 654350
			}
		},
	],
}

export default card
