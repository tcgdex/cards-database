import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Sudowoodo",
		fr: "Simularbre",
		es: "Sudowoodo",
		it: "Sudowoodo",
		pt: "Sudowoodo",
		de: "Mogelbaum"
	},
	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		185,
	],
	hp: 110,
	types: [
		"Fighting",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Reply Strongly",
				fr: "Puissante Réplique",
				es: "Respuesta Decisiva",
				it: "Risposta Ferma",
				pt: "Resposta Enfática",
				de: "Energische Antwort"
			},
			effect: {
				en: "If this Pokémon was damaged by an attack during your opponent’s last turn while it was your Active Pokémon, this attack does 80 more damage.",
				fr: "Si ce Pokémon a subi les dégâts d’une attaque pendant le dernier tour de votre adversaire en tant que Pokémon Actif, cette attaque inflige 80 dégâts supplémentaires.",
				es: "Si este Pokémon resultó dañado por un ataque durante el último turno de tu rival mientras era tu Pokémon Activo, este ataque hace 80 puntos de daño más.",
				it: "Se questo Pokémon è stato danneggiato da un attacco durante l’ultimo turno del tuo avversario mentre era il tuo Pokémon attivo, questo attacco infligge 80 danni in più.",
				pt: "Se este Pokémon foi danificado por um ataque durante a última vez de jogar do seu oponente enquanto era seu Pokémon Ativo, este ataque causará 80 pontos de dano a mais.",
				de: "Wenn diesem Pokémon während des letzten Zuges deines Gegners als dein Aktives Pokémon durch eine Attacke Schaden zugefügt wurde, fügt diese Attacke 80 Schadenspunkte mehr zu."
			},
			damage: "20+",

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
