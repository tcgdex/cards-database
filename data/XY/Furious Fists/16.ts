import { Card } from '../../../interfaces'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		en: "Poliwhirl",
		fr: "Têtarte",
		es: "Poliwhirl",
		it: "Poliwhirl",
		pt: "Poliwhirl",
		de: "Quaputzi"
	},
	illustrator: "Kanako Eo",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		61,
	],
	hp: 80,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Poliwag",
		fr: "Ptitard",
		es: "Poliwag",
		it: "Poliwag",
		pt: "Poliwag",
		de: "Quapsel"
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Rain Splash",
				fr: "Pluie Éclaboussante",
				es: "Golpe de Lluvia",
				it: "Spruzzapioggia",
				pt: "Chuva Borrifante",
				de: "Regenplatscher"
			},

			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Finishing Blow",
				fr: "Coup de Grâce",
				es: "Golpe de Gracia",
				it: "Ultimocolpo",
				pt: "Golpe Final",
				de: "Finalhieb"
			},
			effect: {
				en: "If your opponent's Active Pokémon already has any damage counters on it, this attack does 50 more damage.",
				fr: "Si le Pokémon Actif de votre adversaire a déjà des marqueurs de dégâts, cette attaque inflige 50 dégâts supplémentaires.",
				es: "Si el Pokémon Activo de tu rival ya tiene algún contador de daño sobre él, este ataque hace 50 puntos de daño más.",
				it: "Se il Pokémon attivo del tuo avversario ha dei segnalini danno, questo attacco infligge 50 danni in più.",
				pt: "Se o Pokémon Ativo do seu oponente já possuir contadores de danos, esse ataque causará 50 de danos adicionais.",
				de: "Wenn auf dem Aktiven Pokémon deines Gegners bereits mindestens 1 Schadensmarke liegt, fügt dieser Angriff 50 weitere Schadenspunkte zu."
			},
			damage: "50+",

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
