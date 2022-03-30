import { Card } from '../../../interfaces'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		en: "Lugia",
		fr: "Lugia",
		es: "Lugia",
		it: "Lugia",
		pt: "Lugia",
		de: "Lugia"
	},
	illustrator: "TOKIYA",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		249,
	],
	hp: 120,
	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Pressure",
				fr: "Pression",
				es: "Presión",
				it: "Pressione",
				pt: "Pressão",
				de: "Druck"
			},
			effect: {
				en: "As long as this Pokémon is your Active Pokémon, any damage done by attacks from your opponent's Active Pokémon is reduced by 20 (before applying Weakness and Resistance).",
				fr: "Tant que ce Pokémon est votre Pokémon Actif, tous les dégâts infligés par des attaques du Pokémon Actif de votre adversaire sont réduits de 20 (avant application de la Faiblesse et de la Résistance).",
				es: "Mientras este Pokémon sea tu Pokémon Activo, cualquier daño infligido por ataques del Pokémon Activo de tu rival se reduce en 20 (antes de aplicar Debilidad y Resistencia).",
				it: "Fintanto che questo Pokémon è il tuo Pokémon attivo, i danni inflitti dagli attacchi del Pokémon attivo del tuo avversario sono ridotti di 20, prima di aver applicato debolezza e resistenza.",
				pt: "Enquanto este Pokémon for seu Pokémon Ativo, qualquer dano causado por ataques do Pokémon Ativo do seu oponente, será reduzido em 20 (após a aplicação de Fraqueza e Resistência).",
				de: "Solang dieses Pokémon dein Aktives Pokémon ist, wird Schaden, der durch Angriffe des Aktiven Pokémon deines Gegners zugefügt wird, um 20 Schadenspunkte reduziert (bevor Schwäche und Resistenz verrechnet werden)."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Intensifying Burn",
				fr: "Rage Brûlante",
				es: "Intensa Quemadura",
				it: "Scottatanto",
				pt: "Queimadura Intensificante",
				de: "Brandverstärker"
			},
			effect: {
				en: "If your opponent's Active Pokémon is a Pokémon-EX, this attack does 60 more damage.",
				fr: "Si le Pokémon Actif de votre adversaire est un Pokémon-EX, cette attaque inflige 60 dégâts supplémentaires.",
				es: "Si el Pokémon Activo de tu rival es un Pokémon-EX, este ataque hace 60 puntos de daño más.",
				it: "Se il Pokémon attivo del tuo avversario è un Pokémon-EX, questo attacco infligge 60 danni in più.",
				pt: "Se o Pokémon Ativo do seu oponente for um Pokémon-EX, este ataque causará 60 de danos adicionais.",
				de: "Wenn das Aktive Pokémon deines Gegners ein Pokémon-EX ist, fügt dieser Angriff 60 weitere Schadenspunkte zu."
			},
			damage: "60+",

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
