import { Card } from '../../../interfaces'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		en: "Reuniclus",
		fr: "Symbios",
		es: "Reuniclus",
		it: "Reuniclus",
		pt: "Reuniclus",
		de: "Zytomega"
	},
	illustrator: "Yukiko Baba",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		579,
	],
	hp: 90,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Duosion",
		fr: "Méios",
		es: "Duosion",
		it: "Duosion",
		pt: "Duosion",
		de: "Mitodos"
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Link Fusion",
				fr: "Lien Fusion",
				es: "Conexión Fusión",
				it: "Superlegame",
				pt: "Fusão de Conexão",
				de: "Fusionsband"
			},
			effect: {
				en: "If Solosis is on your Bench, this attack does 30 more damage. If Duosion is on your Bench, this attack does 60 more damage. If Reuniclus is on your Bench, this attack does 90 more damage.",
				fr: "Si Nucléos est sur votre Banc, cette attaque inflige 30 dégâts supplémentaires. Si Méios est sur votre Banc, cette attaque inflige 60 dégâts supplémentaires. Si Symbios est sur votre Banc, cette attaque inflige 90 dégâts supplémentaires.",
				es: "Si Solosis está en tu Banca, este ataque hace 30 puntos de daño más. Si Duosion está en tu Banca, este ataque hace 60 puntos de daño más. Si Reuniclus está en tu Banca, este ataque hace 90 puntos de daño más.",
				it: "Se Solosis è nella tua panchina, questo attacco infligge 30 danni in più. Se Duosion è nella tua panchina, questo attacco infligge 60 danni in più. Se Reuniclus è nella tua panchina, questo attacco infligge 90 danni in più.",
				pt: "Se Solosis estiver no seu Banco, este ataque causará 30 de danos adicionais. Se Duosion estiver no seu Banco, este ataque causará 60 de danos adicionais. Se Reuniclus estiver no seu Banco, este ataque causará 90 de danos adicionais.",
				de: "Wenn sich Monozyto auf deiner Bank befindet, fügt dieser Angriff 30 weitere Schadenspunkte zu. Wenn sich Mitodos auf deiner Bank befindet, fügt dieser Angriff 60 weitere Schadenspunkte zu. Wenn sich Zytomega auf deiner Bank befindet, fügt dieser Angriff 90 weitere Schadenspunkte zu."
			},
			damage: "10+",

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
