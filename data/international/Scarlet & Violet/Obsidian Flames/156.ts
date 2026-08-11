import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [966],
	set: Set,

	name: {
		'fr-fr': "Vrombotor-ex",
		'en-us': "Revavroom ex",
		'es-es': "Revavroom ex",
		'it-it': "Revavroom-ex",
		'pt-br': "Revavroom ex",
		'de-de': "Knattatox-ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 280,
	types: ["Metal"],
	evolveFrom: {
		'fr-fr': "Vrombi",
		'en-us': "Varoom",
		'es-es': "Varoom",
		'it-it': "Varoom",
		'pt-br': "Varoom",
		'de-de': "Knattox"
	},
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'fr-fr': "Tuning",
			'en-us': "Tune-Up",
			'es-es': "Puesta a Punto",
			'it-it': "Messa a Punto",
			'pt-br': "Tunar",
			'de-de': "Aufmotzen"
		},

		effect: {
			'fr-fr': "Jusqu'à 4 Outils Pokémon peuvent être attachés à ce Pokémon. S'il perd ce talent, défaussez des Outils Pokémon jusqu'à ce qu'il ne lui en reste qu'un.",
			'en-us': "This Pokémon may have up to 4 Pokémon Tools attached to it. If it loses this Ability, discard Pokémon Tools from it until only 1 remains.",
			'es-es': "Este Pokémon puede tener hasta 4 Herramientas Pokémon unidas a él. Si pierde esta habilidad, descarta Herramientas Pokémon hasta que solo le quede una.",
			'it-it': "Questo Pokémon può avere fino a quattro carte Oggetto Pokémon assegnate. Se perde questa abilità, scarta le carte Oggetto Pokémon assegnategli finché ne resta solo una.",
			'pt-br': "Este Pokémon pode ter até 4 Ferramentas Pokémon ligadas a ele. Se ele perder esta Habilidade, descarte Ferramentas Pokémon dele até restar apenas 1.",
			'de-de': "An dieses Pokémon können bis zu 4 Pokémon-Ausrüstungen angelegt sein. Wenn es diese Fähigkeit verliert, lege von ihm so lange Pokémon-Ausrüstungen auf deinen Ablagestapel, bis nur 1 übrig ist."
		}
	}],

	attacks: [{
		cost: ["Metal", "Metal", "Colorless"],

		name: {
			'fr-fr': "Drift Sauvage",
			'en-us': "Wild Drift",
			'es-es': "Derrape Salvaje",
			'it-it': "Sbandata Sfrenata",
			'pt-br': "Derrapada Selvagem",
			'de-de': "Wilder Drift"
		},

		effect: {
			'fr-fr': "Pendant le prochain tour de votre adversaire, ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			'en-us': "During your opponent's next turn, this Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
			'es-es': "Durante el próximo turno de tu rival, los ataques hacen 30 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
			'it-it': "Durante il prossimo turno del tuo avversario, questo Pokémon subisce 30 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
			'pt-br': "Durante o próximo turno do seu oponente, este Pokémon receberá 30 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência).",
			'de-de': "Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken 30 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
		},

		damage: 170
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 725236,
				tcgplayer: 509943,
				cardtrader: 255841
			}
		},
	],

	suffix: "ex",
	illustrator: "takuyoa",

	
}

export default card
