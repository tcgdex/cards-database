import { Card } from '../../../interfaces'
import Set from '../Perfect Order'

const card: Card = {
	name: {
		en: "Klefki",
		fr: "Trousselin",
		es: "Klefki",
		de: "Clavion",
		it: "Klefki",
		pt: "Klefki"
	},
	set: Set,
	rarity: "Common",
	category: "Pokemon",
	dexId: [
		707
	],
	hp: 70,
	types: [
		"Metal"
	],
	stage: "Basic",
	attacks: [
		{
			cost: [
				"Metal"
			],
			name: {
				en: "Memory Lock",
				fr: "Verrou Mémoire",
				es: "Bloqueo de Memoria",
				de: "Gedächtnisschloss",
				it: "Lucchetto Mnemonico",
				pt: "Fechadura da Memória"
			},
			damage: "30",
			effect: {
				en: "Choose 1 of your opponent's Active Pokémon's attacks. During your opponent's next turn, that Pokémon can't use that attack.",
				fr: "Choisissez l'une des attaques du Pokémon Actif de votre adversaire. Pendant le prochain tour de votre adversaire, ce Pokémon-là ne peut pas utiliser cette attaque.",
				es: "Elige uno de los ataques del Pokémon Activo de tu rival. Durante el próximo turno de tu rival, dicho Pokémon no puede usar ese ataque.",
				de: "Wähle 1 Attacke des Aktiven Pokémon deines Gegners. Während des nächsten Zuges deines Gegners kann jenes Pokémon jene Attacke nicht einsetzen.",
				it: "Scegli un attacco del Pokémon attivo del tuo avversario. Durante il prossimo turno del tuo avversario, quel Pokémon non potrà utilizzarlo.",
				pt: "Escolha 1 dos ataques do Pokémon Ativo do seu oponente. Durante o próximo turno do seu oponente, aquele Pokémon não poderá usar aquele ataque."
			}
		}
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Grass",
			value: "-30"
		}
	],
	retreat: 1,
	regulationMark: "J",
	illustrator: "MINAMINAMI Take",
	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	],
	thirdParty: {
		tcgplayer: 684436,
		cardmarket: 877475
	}
}

export default card
