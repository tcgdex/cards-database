import { Card } from 'models/database/card'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		'en-us': "Sudowoodo",
		'fr-fr': "Simularbre",
		'es-es': "Sudowoodo",
		'it-it': "Sudowoodo",
		'pt-br': "Sudowoodo",
		'de-de': "Mogelbaum"
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
				'en-us': "Reply Strongly",
				'fr-fr': "Puissante Réplique",
				'es-es': "Respuesta Decisiva",
				'it-it': "Risposta Ferma",
				'pt-br': "Resposta Enfática",
				'de-de': "Energische Antwort"
			},
			effect: {
				'en-us': "If this Pokémon was damaged by an attack during your opponent’s last turn while it was your Active Pokémon, this attack does 80 more damage.",
				'fr-fr': "Si ce Pokémon a subi les dégâts d’une attaque pendant le dernier tour de votre adversaire en tant que Pokémon Actif, cette attaque inflige 80 dégâts supplémentaires.",
				'es-es': "Si este Pokémon resultó dañado por un ataque durante el último turno de tu rival mientras era tu Pokémon Activo, este ataque hace 80 puntos de daño más.",
				'it-it': "Se questo Pokémon è stato danneggiato da un attacco durante l’ultimo turno del tuo avversario mentre era il tuo Pokémon attivo, questo attacco infligge 80 danni in più.",
				'pt-br': "Se este Pokémon foi danificado por um ataque durante a última vez de jogar do seu oponente enquanto era seu Pokémon Ativo, este ataque causará 80 pontos de dano a mais.",
				'de-de': "Wenn diesem Pokémon während des letzten Zuges deines Gegners als dein Aktives Pokémon durch eine Attacke Schaden zugefügt wurde, fügt diese Attacke 80 Schadenspunkte mehr zu."
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

	description: {
		'en-us': "Apparently, the larger the green parts of this Pokémon, the more collectors value it. It's a particular favorite among elderly people.",
	},

	thirdParty: {
		cardmarket: 365747,
		tcgplayer: 178923
	}
}

export default card
