import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Celebi & Venusaur GX",
		fr: "Celebi et Florizarre GX",
		es: "Celebi y Venusaur GX",
		it: "Celebi e Venusaur GX",
		pt: "Celebi e Venusaur GX",
		de: "Celebi & Bisaflor GX"
	},

	illustrator: "5ban Graphics",
	rarity: "Secret Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		3,
	],

	hp: 270,

	types: [
		"Grass",
	],

	suffix: "TAG TEAM-GX",

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Pollen Hazard",
				fr: "Pollen Dangereux",
				es: "Polen Nocivo",
				it: "Rischio Polline",
				pt: "Pólen Perigoso",
				de: "Pollengefahr"
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Burned, Confused, and Poisoned.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé, Confus et Empoisonné.",
				es: "El Pokémon Activo de tu rival pasa a estar Confundido, Envenenado y Quemado.",
				it: "Il Pokémon attivo del tuo avversario viene bruciato, confuso e avvelenato.",
				pt: "O Pokémon Ativo do seu oponente agora está Confuso, Envenenado e Queimado.",
				de: "Das Aktive Pokémon deines Gegners ist jetzt verbrannt, verwirrt und vergiftet."
			},
			damage: 50,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Solar Beam",
				fr: "Lance-Soleil",
				es: "Rayo Solar",
				it: "Solarraggio",
				pt: "Raio Solar",
				de: "Solarstrahl"
			},
			damage: 150,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
				"Colorless",
			],

			name: {
				en: "Evergreen GX",
				fr: "Sempervirent GX",
				es: "Perenne GX",
				it: "Sempreverde GX",
				pt: "Perene GX",
				de: "Immergrün GX"
			},

			effect: {
				en: "Heal all damage from this Pokémon. If this Pokémon has at least 1 extra Grass Energy attached to it (in addition to this attack’s cost), shuffle all cards from your discard pile into your deck. (You can’t use more than 1 GX attack in a game.)",
				fr: "Soignez tous les dégâts de ce Pokémon. Si au moins une Énergie Grass supplémentaire est attachée à ce Pokémon (en plus du coût de cette attaque), mélangez toutes les cartes dans votre pile de défausse avec votre deck. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				es: "Cura todos los puntos de daño a este Pokémon. Si este Pokémon tiene por lo menos 1 Energía Grass adicional unida a él (además de las del coste de este ataque), pon todas las cartas de tu pila de descartes en tu baraja y barájalas todas. (No puedes usar más de 1 ataque GX en una partida).",
				it: "Cura questo Pokémon da tutti i danni. Se questo Pokémon ha almeno un’Energia Grass extra assegnata, in aggiunta a quelle del costo di questo attacco, rimischia tutte le carte dalla tua pila degli scarti nel tuo mazzo. Non puoi usare più di un attacco GX a partita.",
				pt: "Cure todo o dano deste Pokémon. Se este Pokémon tiver pelo menos 1 Energia Grass adicional ligada a ele (além do custo deste ataque), embaralhe todas as cartas da sua pilha de descarte no seu baralho (você não pode usar mais de 1 ataque GX por partida).",
				de: "Heile allen Schaden bei diesem Pokémon. Wenn an dieses Pokémon mindestens 1 extra Grass-Energie angelegt ist (zusätzlich zu den Kosten dieser Attacke), mische alle Karten aus deinem Ablagestapel in dein Deck. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},

			damage: 180
		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 4,

	thirdParty: {
		cardmarket: 367097,
		tcgplayer: 183772
	}
}

export default card
