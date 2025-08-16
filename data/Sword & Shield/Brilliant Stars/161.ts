import { Card } from "../../../interfaces"
import Set from "../Brilliant Stars"

const card: Card = {
	dexId: [430],
	set: Set,

	name: {
		en: "Honchkrow V",
		fr: "Corboss V",
		es: "Honchkrow V",
		it: "Honchkrow V",
		pt: "Honchkrow V",
		de: "Kramshef V"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 200,
	types: ["Darkness"],
	stage: "Basic",
	suffix: "V",

	abilities: [{
		type: "Ability",

		name: {
			en: "Boss Pockets",
			fr: "Poches de Boss",
			es: "Bolsillos del Jefe",
			it: "Tasche del Capo",
			pt: "Bolsos do Chefão",
			de: "Taschen des Bosses"
		},

		effect: {
			en: "This Pokémon may have up to 4 Pokémon Tools attached to it. If it loses this Ability, discard Pokémon Tools from it until only 1 remains.",
			fr: "Jusqu'à 4 Outils Pokémon peuvent être attachés à ce Pokémon. S'il perd ce talent, défaussez des Outils Pokémon jusqu'à ce qu'il ne lui en reste qu'un.",
			es: "Este Pokémon puede tener hasta 4 Herramientas Pokémon unidas a él. Si pierde esta habilidad, descarta Herramientas Pokémon hasta que solo le quede 1.",
			it: "Questo Pokémon può avere fino a quattro carte Oggetto Pokémon assegnate. Se perde questa abilità, scarta le carte Oggetto Pokémon assegnategli finché ne resta solo una.",
			pt: "Este Pokémon pode ter até 4 Ferramentas Pokémon ligadas a ele. Se ele perder esta Habilidade, descarte Ferramentas Pokémon dele até restar apenas 1.",
			de: "An dieses Pokémon können bis zu 4 Pokémon-Ausrüstungen angelegt sein. Wenn es diese Fähigkeit verliert, lege von ihm so lange Pokémon-Ausrüstungen auf deinen Ablagestapel, bis nur 1 übrig ist."
		}
	}],

	attacks: [{
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			en: "Fearsome Shadow",
			fr: "Ombre Redoutable",
			es: "Sombra Imponente",
			it: "Tremendombra",
			pt: "Sombra Temível",
			de: "Furchtbarer Schatten"
		},

		effect: {
			en: "Your opponent reveals their hand.",
			fr: "Votre adversaire dévoile sa main.",
			es: "Tu rival enseña las cartas de su mano.",
			it: "Il tuo avversario mostra le carte che ha in mano.",
			pt: "Seu oponente revela a própria mão.",
			de: "Dein Gegner zeigt dir seine Handkarten."
		},

		damage: 130
	}],

	retreat: 1,
	regulationMark: "F",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 608538,
		tcgplayer: 263880
	}
}

export default card