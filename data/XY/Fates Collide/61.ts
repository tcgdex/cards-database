import { Card } from '../../../interfaces'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		en: "Bronzong",
		fr: "Archéodong",
		es: "Bronzong",
		it: "Bronzong",
		pt: "Bronzong",
		de: "Bronzong"
	},

	illustrator: "Naoki Saito",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		437,
	],

	hp: 100,

	types: [
		"Metal",
	],

	evolveFrom: {
		en: "Bronzor",
		fr: "Archéomire",
		es: "Bronzor",
		it: "Bronzor",
		pt: "Bronzor",
		de: "Bronzel"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Metal Fortress",
				fr: "Forteresse Métallique",
				es: "Fortaleza Metálica",
				it: "Fortezza Metallica",
				pt: "Forte Metálico",
				de: "Metallfestung"
			},
			effect: {
				en: "Prevent all effects of your opponent's attacks, including damage, done to your Benched Pokémon.",
				fr: "Évitez tous les effets des attaques de votre adversaire, y compris les dégâts, infligés à vos Pokémon de Banc.",
				es: "Evita todos los efectos de los ataques de tu rival, incluido el daño, infligidos a tus Pokémon en Banca.",
				it: "Previeni tutti gli effetti degli attacchi del tuo avversario, inclusi i danni, inflitti ai tuoi Pokémon in panchina.",
				pt: "Previne todos os efeitos de ataques do seu oponente, inclusive danos, causados a seus Pokémon no Banco.",
				de: "Verhindere alle Effekte von Angriffen gegnerischer Pokémon, einschließlich Schaden, die den Pokémon auf deiner Bank zugefügt werden."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Guard Press",
				fr: "Pression de Garde",
				es: "Presión de Guardia",
				it: "Pressadifesa",
				pt: "Aperto Protetor",
				de: "Schutzdruck"
			},
			effect: {
				en: "During your opponent's next turn, any damage done to this Pokémon by attacks is reduced by 20 (after applying Weakness and Resistance).",
				fr: "Pendant le prochain tour de votre adversaire, tous les dégâts infligés à ce Pokémon par des attaques sont réduits de 20 (après application de la Faiblesse et de la Résistance).",
				es: "Durante el próximo turno de tu rival, cualquier daño infligido a este Pokémon por ataques se reduce en 20 (después de aplicar Debilidad y Resistencia).",
				it: "Durante il prossimo turno del tuo avversario, i danni inflitti a questo Pokémon dagli attacchi sono ridotti di 20, dopo aver applicato debolezza e resistenza.",
				pt: "Durante a próxima vez de jogar do seu oponente, qualquer dano causado a este Pokémon por ataques será reduzido em 20 (após a aplicação de Fraqueza e Resistência).",
				de: "Während des nächsten Zuges deines Gegners wird Schaden, der diesem Pokémon durch Angriffe zugefügt wird, um 20 Schadenspunkte reduziert (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 289882,
		tcgplayer: 117836
	}
}

export default card
