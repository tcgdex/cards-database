import { Card } from '../../../interfaces'
import Set from '../XY'

const card: Card = {
	name: {
		en: "Furfrou",
		fr: "Couafarel",
		es: "Furfrou",
		it: "Furfrou",
		pt: "Furfrou",
		de: "Coiffwaff"
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		676,
	],
	hp: 90,
	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Fur Coat",
				fr: "Toison Épaisse",
				es: "Pelaje Recio",
				it: "Foltopelo",
				pt: "Camada de Pelos",
				de: "Fellkleid"
			},
			effect: {
				en: "Any damage done to this Pokémon by attacks is reduced by 20 (after applying Weakness and Resistance).",
				fr: "Tous les dégâts infligés à ce Pokémon par des attaques sont réduits de 20 (après application de la Faiblesse et de la Résistance).",
				es: "Cualquier daño infligido a este Pokémon por ataques se reduce en 20 (después de aplicar Debilidad y Resistencia).",
				it: "I danni inflitti a questo Pokémon dagli attacchi sono ridotti di 20, dopo aver applicato debolezza e resistenza.",
				pt: "Qualquer dano causado a este Pokémon por ataques será reduzido em 20 (após a aplicação de Fraqueza e Resistência).",
				de: "Schaden, der diesem Pokémon durch Angriffe zugefügt wird, wird um 20 Schadenspunkte reduziert (nachdem Schwäche und Resistenz verrechnet wurden)."
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
				en: "Energy Cutoff",
				fr: "Coupure d'Énergie",
				es: "Corte de Energía",
				it: "Calopotenza",
				pt: "Corte de Energia",
				de: "Energiesperre"
			},
			effect: {
				en: "Flip a coin. If heads, discard an Energy attached to your opponent's Active Pokémon.",
				fr: "Lancez une pièce. Si c'est face, défaussez une Énergie attachée au Pokémon Actif de votre adversaire.",
				es: "Lanza 1 moneda. Si sale cara, descarta 1 Energía unida al Pokémon Activo de tu rival.",
				it: "Lancia una moneta. Se esce testa, scarta un'Energia assegnata al Pokémon attivo del tuo avversario.",
				pt: "Jogue uma moeda. Se sair cara, descarte uma Energia ligada ao Pokémon Ativo do seu oponente.",
				de: "Wirf 1 Münze. Lege bei \"Kopf\" 1 an das Aktive Pokémon deines Gegners angelegte Energie auf den Ablagestapel deines Gegners."
			},
			damage: 80,

		}
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
