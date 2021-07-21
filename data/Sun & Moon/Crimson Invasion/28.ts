import { Card } from '../../../interfaces'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		en: "Regice",
		fr: "Regice",
		es: "Regice",
		it: "Regice",
		pt: "Regice",
		de: "Regice"
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		378,
	],
	hp: 130,
	types: [
		"Water",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Iceberg Shield",
				fr: "Bouclier Iceberg",
				es: "Escudo Iceberg",
				it: "Scudo Iceberg",
				pt: "Escudo Iceberg",
				de: "Im Schutz des Eisbergs"
			},
			effect: {
				en: "If you have Regirock in play, prevent all effects of attacks, including damage, done to this Pokémon by your opponent’s Stage 2 Pokémon.",
				fr: "Si vous avez Regirock en jeu, évitez tous les effets d’attaques, y compris les dégâts, infligés à ce Pokémon par les Pokémon de Niveau 2 de votre adversaire.",
				es: "Si tienes a Regirock en juego, evita todos los efectos de los ataques, incluido el daño, infligidos a este Pokémon por los Pokémon de Fase 2 de tu rival.",
				it: "Se hai Regirock in gioco, previeni tutti gli effetti degli attacchi, inclusi i danni, inflitti a questo Pokémon dai Pokémon di Fase 2 del tuo avversario.",
				pt: "Se você tiver Regirock em jogo, prevenirá todos os efeitos de ataques, incluindo dano, causados a este Pokémon pelos Pokémon Estágio 2 do seu oponente.",
				de: "Wenn du Regirock im Spiel hast, verhindere alle Effekte von Attacken, einschließlich Schaden, die diesem Pokémon durch Phase-2-Pokémon deines Gegners zugefügt werden."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Frost Smash",
				fr: "Impact Glacial",
				es: "Golpe Gélido",
				it: "Gelocolpo",
				pt: "Pancada Congelada",
				de: "Frostschlag"
			},

			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
