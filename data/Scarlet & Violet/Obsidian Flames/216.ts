import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

const card: Card = {
	set: Set,

	name: {
		fr: "Vrombotor-ex",
		en: "Revavroom ex",
		es: "Revavroom ex",
		it: "Revavroom-ex",
		pt: "Revavroom ex",
		de: "Knattatox-ex"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 280,
	types: ["Metal"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			fr: "Tuning",
			en: "Tune-Up",
			es: "Puesta a Punto",
			it: "Messa a Punto",
			pt: "Tunar",
			de: "Aufmotzen"
		},

		effect: {
			fr: "Jusqu'à 4 Outils Pokémon peuvent être attachés à ce Pokémon. S'il perd ce talent, défaussez des Outils Pokémon jusqu'à ce qu'il ne lui en reste qu'un.",
			en: "This Pokémon may have up to 4 Pokémon Tools attached to it. If it loses this Ability, discard Pokémon Tools from it until only 1 remains.",
			es: "Este Pokémon puede tener hasta 4 Herramientas Pokémon unidas a él. Si pierde esta habilidad, descarta Herramientas Pokémon hasta que solo le quede una.",
			it: "Questo Pokémon può avere fino a quattro carte Oggetto Pokémon assegnate. Se perde questa abilità, scarta le carte Oggetto Pokémon assegnategli finché ne resta solo una.",
			pt: "Este Pokémon pode ter até 4 Ferramentas Pokémon ligadas a ele. Se ele perder esta Habilidade, descarte Ferramentas Pokémon dele até restar apenas 1.",
			de: "An dieses Pokémon können bis zu 4 Pokémon-Ausrüstungen angelegt sein. Wenn es diese Fähigkeit verliert, lege von ihm so lange Pokémon-Ausrüstungen auf deinen Ablagestapel, bis nur 1 übrig ist."
		}
	}],

	attacks: [{
		cost: ["Metal", "Metal", "Colorless"],

		name: {
			fr: "Drift Sauvage",
			en: "Wild Drift",
			es: "Derrape Salvaje",
			it: "Sbandata Sfrenata",
			pt: "Derrapada Selvagem",
			de: "Wilder Drift"
		},

		effect: {
			fr: "Pendant le prochain tour de votre adversaire, ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			en: "During your opponent's next turn, this Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
			es: "Durante el próximo turno de tu rival, los ataques hacen 30 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
			it: "Durante il prossimo turno del tuo avversario, questo Pokémon subisce 30 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
			pt: "Durante o próximo turno do seu oponente, este Pokémon receberá 30 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência).",
			de: "Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken 30 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
		},

		damage: 170
	}],

	retreat: 1,
	regulationMark: "G",

	variants: {
		reverse: false,
		normal: false
	},

	illustrator: "takuyoa",

	thirdParty: {
		cardmarket: 725236
	}
}

export default card