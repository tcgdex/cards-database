import { Card } from 'models/database/card'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		'en-us': "Mimikyu",
		'fr-fr': "Mimiqui",
		'es-es': "Mimikyu",
		'it-it': "Mimikyu",
		'pt-br': "Mimikyu",
		'de-de': "Mimigma"
	},

	illustrator: "Yuka Morii",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		778,
	],

	hp: 70,

	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Shadow Box",
				'fr-fr': "Boîte Obscure",
				'es-es': "Caja Sombría",
				'it-it': "Scatola Oscura",
				'pt-br': "Caixa Sombria",
				'de-de': "Schattenkiste"
			},
			effect: {
				'en-us': "Pokémon-GX that have any damage counters on them (both yours and your opponent’s) have no Abilities.",
				'fr-fr': "Les Pokémon-GX qui ont des marqueurs de dégâts (les vôtres et ceux de votre adversaire) n’ont pas de talent.",
				'es-es': "Los Pokémon-GX que tengan algún contador de daño sobre ellos (tanto tuyos como de tu rival) no tienen ninguna habilidad.",
				'it-it': "Le abilità dei Pokémon-GX che hanno dei segnalini danno, sia tuoi che del tuo avversario, non hanno effetto.",
				'pt-br': "Os Pokémon-GX que tiverem algum contador de dano neles (seus e do seu oponente) não têm Habilidades.",
				'de-de': "Pokémon-GX (deine und die deines Gegners), auf denen mindestens 1 Schadensmarke liegt, haben keine Fähigkeiten."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Tail Trickery",
				'fr-fr': "Queue Étourdissante",
				'es-es': "Cola Engaño",
				'it-it': "Confondicoda",
				'pt-br': "Truques de Cauda",
				'de-de': "Schweiftrick"
			},
			effect: {
				'en-us': "Flip a coin. If heads, your opponent’s Active Pokémon is now Confused.",
				'fr-fr': "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Confus.",
				'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Confundido.",
				'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene confuso.",
				'pt-br': "Jogue 1 moeda. Se sair cara, o Pokémon Ativo do seu oponente será Confundido.",
				'de-de': "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt verwirrt."
			},
			damage: 20,

		},
	],

	retreat: 1,

	description: {
		'en-us': "Although it's a quiet, lonely Pokémon, if you try to look at what's under its rag, it will become agitated and resist violently.",
	},

	thirdParty: {
		cardmarket: 408124,
		tcgplayer: 201272
	}
}

export default card
