import { Card } from 'models/database/card'
import Set from '../SM Black Star Promos'

const card: Card = {
	dexId: [3, 251],
	name: {
		'fr-fr': "Celebi et Florizarre GX",
		'en-us': "Celebi & Venusaur GX",
		'es-es': "Celebi y Venusaur GX",
		'it-it': "Celebi e Venusaur GX",
		'pt-br': "Celebi e Venusaur GX",
		'de-de': "Celebi & Bisaflor GX"
	},
	illustrator: "Shin Nagasawa",
	rarity: "Promo",
	category: "Pokemon",

	set: Set,

	hp: 270,
	types: [
		"Grass",
	],


	suffix: "TAG TEAM-GX",

	attacks: [{
		name: {
			'fr-fr': "Pollen Dangereux",
			'en-us': "Pollen Hazard",
			'es-es': "Polen Nocivo",
			'it-it': "Rischio Polline",
			'pt-br': "Pólen Perigoso",
			'de-de': "Pollengefahr"
		},

		damage: 50,

		effect: {
			'en-us': "Your opponent’s Active Pokémon is now Burned, Confused, and Poisoned.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Brûlé, Confus et Empoisonné.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido, Envenenado y Quemado.",
			'it-it': "Il Pokémon attivo del tuo avversario viene bruciato, confuso e avvelenato.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso, Envenenado e Queimado.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verbrannt, verwirrt und vergiftet."
		},

		cost: ["Grass", "Colorless", "Colorless"]
	}, {
		cost: ["Grass", "Grass", "Colorless", "Colorless"],
		name: {
			'fr-fr': "Lance-Soleil",
			'en-us': "Solar Beam",
			'es-es': "Rayo Solar",
			'it-it': "Solarraggio",
			'pt-br': "Raio Solar",
			'de-de': "Solarstrahl"
		},
		damage: 150,

	}, {
		name: {
			'en-us': "Evergreen GX",
			'fr-fr': "Sempervirent GX",
			'es-es': "Perenne GX",
			'it-it': "Sempreverde GX",
			'pt-br': "Perene GX",
			'de-de': "Immergrün GX"
		},

		damage: 180,

		effect: {
			'en-us': "Heal all damage from this Pokémon. If this Pokémon has at least 1 extra Grass Energy attached to it (in addition to this attack’s cost), shuffle all cards from your discard pile into your deck. (You can’t use more than 1 GX attack in a game.)",
			'fr-fr': "Soignez tous les dégâts de ce Pokémon. Si au moins une Énergie Grass supplémentaire est attachée à ce Pokémon (en plus du coût de cette attaque), mélangez toutes les cartes dans votre pile de défausse avec votre deck. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			'es-es': "Cura todos los puntos de daño a este Pokémon. Si este Pokémon tiene por lo menos 1 Energía Grass adicional unida a él (además de las del coste de este ataque), pon todas las cartas de tu pila de descartes en tu baraja y barájalas todas. (No puedes usar más de 1 ataque GX en una partida).",
			'it-it': "Cura questo Pokémon da tutti i danni. Se questo Pokémon ha almeno un’Energia Grass extra assegnata, in aggiunta a quelle del costo di questo attacco, rimischia tutte le carte dalla tua pila degli scarti nel tuo mazzo. Non puoi usare più di un attacco GX a partita.",
			'pt-br': "Cure todo o dano deste Pokémon. Se este Pokémon tiver pelo menos 1 Energia Grass adicional ligada a ele (além do custo deste ataque), embaralhe todas as cartas da sua pilha de descarte no seu baralho (você não pode usar mais de 1 ataque GX por partida).",
			'de-de': "Heile allen Schaden bei diesem Pokémon. Wenn an dieses Pokémon mindestens 1 extra Grass-Energie angelegt ist (zusätzlich zu den Kosten dieser Attacke), mische alle Karten aus deinem Ablagestapel in dein Deck. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
		},

		cost: ["Grass", "Grass", "Colorless", "Colorless"]
	}],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 4,



}

export default card
