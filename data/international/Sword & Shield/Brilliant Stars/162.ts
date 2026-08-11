import { Card } from "models/database/card"
import Set from "../Brilliant Stars"

const card: Card = {
	dexId: [430],
	set: Set,

	name: {
		'en-us': "Honchkrow V",
		'fr-fr': "Corboss V",
		'es-es': "Honchkrow V",
		'it-it': "Honchkrow V",
		'pt-br': "Honchkrow V",
		'de-de': "Kramshef V"
	},

	illustrator: "zig",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 200,
	types: ["Darkness"],
	stage: "Basic",
	suffix: "V",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Boss Pockets",
			'fr-fr': "Poches de Boss",
			'es-es': "Bolsillos del Jefe",
			'it-it': "Tasche del Capo",
			'pt-br': "Bolsos do Chefão",
			'de-de': "Taschen des Bosses"
		},

		effect: {
			'en-us': "This Pokémon may have up to 4 Pokémon Tools attached to it. If it loses this Ability, discard Pokémon Tools from it until only 1 remains.",
			'fr-fr': "Jusqu'à 4 Outils Pokémon peuvent être attachés à ce Pokémon. S'il perd ce talent, défaussez des Outils Pokémon jusqu'à ce qu'il ne lui en reste qu'un.",
			'es-es': "Este Pokémon puede tener hasta 4 Herramientas Pokémon unidas a él. Si pierde esta habilidad, descarta Herramientas Pokémon hasta que solo le quede 1.",
			'it-it': "Questo Pokémon può avere fino a quattro carte Oggetto Pokémon assegnate. Se perde questa abilità, scarta le carte Oggetto Pokémon assegnategli finché ne resta solo una.",
			'pt-br': "Este Pokémon pode ter até 4 Ferramentas Pokémon ligadas a ele. Se ele perder esta Habilidade, descarte Ferramentas Pokémon dele até restar apenas 1.",
			'de-de': "An dieses Pokémon können bis zu 4 Pokémon-Ausrüstungen angelegt sein. Wenn es diese Fähigkeit verliert, lege von ihm so lange Pokémon-Ausrüstungen auf deinen Ablagestapel, bis nur 1 übrig ist."
		}
	}],

	attacks: [{
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			'en-us': "Fearsome Shadow",
			'fr-fr': "Ombre Redoutable",
			'es-es': "Sombra Imponente",
			'it-it': "Tremendombra",
			'pt-br': "Sombra Temível",
			'de-de': "Furchtbarer Schatten"
		},

		effect: {
			'en-us': "Your opponent reveals their hand.",
			'fr-fr': "Votre adversaire dévoile sa main.",
			'es-es': "Tu rival enseña las cartas de su mano.",
			'it-it': "Il tuo avversario mostra le carte che ha in mano.",
			'pt-br': "Seu oponente revela a própria mão.",
			'de-de': "Dein Gegner zeigt dir seine Handkarten."
		},

		damage: 130
	}],

	weaknesses: [
		{
			type: "Lightning",
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
	regulationMark: "F",


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 608708,
				tcgplayer: 263881
			}
		},
	],
}

export default card
