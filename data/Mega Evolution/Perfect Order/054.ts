import { Card } from '../../../interfaces'
import Set from '../Perfect Order'

const card: Card = {
	name: {
		en: "Chien-Pao",
		fr: "Baojian",
		es: "Chien-Pao",
		de: "Baojian",
		it: "Chien-Pao",
		pt: "Chien-Pao"
	},
	set: Set,
	rarity: "Rare",
	category: "Pokemon",
	dexId: [
		1002
	],
	hp: 120,
	types: [
		"Darkness"
	],
	stage: "Basic",
	attacks: [
		{
			cost: [
				"Darkness"
			],
			name: {
				en: "Strafe",
				fr: "Bombarder",
				es: "Pasada de Ataque",
				de: "Beharken",
				it: "Mitragliare",
				pt: "Bombardear"
			},
			damage: "20",
			effect: {
				en: "You may switch this Pokémon with 1 of your Benched Pokémon.",
				fr: "Vous pouvez échanger ce Pokémon contre l'un de vos Pokémon de Banc.",
				es: "Puedes cambiar este Pokémon por uno de tus Pokémon en Banca.",
				de: "Du kannst dieses Pokémon gegen 1 Pokémon auf deiner Bank austauschen.",
				it: "Puoi scambiare questo Pokémon con uno nella tua panchina.",
				pt: "Você pode trocar este Pokémon por 1 dos seus Pokémon no Banco."
			}
		},
		{
			cost: [
				"Darkness",
				"Darkness",
				"Colorless"
			],
			name: {
				en: "Rising Blade",
				fr: "Lame Ascendante",
				es: "Hoja Creciente",
				de: "Aufwärtsklinge",
				it: "Lama Ascendente",
				pt: "Lâmina Crescente"
			},
			damage: "80+",
			effect: {
				en: "If your opponent's Active Pokémon is a Pokémon ex, this attack does 80 more damage.",
				fr: "Si le Pokémon Actif de votre adversaire est un Pokémon-ex, cette attaque inflige 80 dégâts supplémentaires.",
				es: "Si el Pokémon Activo de tu rival es un Pokémon ex, este ataque hace 80 puntos de daño más.",
				de: "Wenn das Aktive Pokémon deines Gegners ein Pokémon-ex ist, fügt diese Attacke 80 Schadenspunkte mehr zu.",
				it: "Se il Pokémon attivo del tuo avversario è un Pokémon-ex, questo attacco infligge 80 danni in più.",
				pt: "Se o Pokémon Ativo do seu oponente for um Pokémon ex, este ataque causará 80 pontos de dano a mais."
			}
		}
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		}
	],
	retreat: 1,
	regulationMark: "J",
	illustrator: "Satoshi Ito",
	variants: [
		{
			type: "holo"
		},
		{
			type: "reverse"
		}
	],
	thirdParty: {
		tcgplayer: 684435,
		cardmarket: 877470
	}
}

export default card
