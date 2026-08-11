import { Card } from 'models/database/card'
import Set from '../Team Up'

const card: Card = {
	name: {
		'en-us': "Cobalion GX",
		'fr-fr': "Cobaltium GX",
		'es-es': "Cobalion GX",
		'it-it': "Cobalion GX",
		'pt-br': "Cobalion GX",
		'de-de': "Kobalium GX"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		638,
	],

	hp: 170,

	types: [
		"Metal",
	],

	suffix: "GX",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Metal Symbol",
				'fr-fr': "Symbole Métal",
				'es-es': "Símbolo Metálico",
				'it-it': "Simbolo Metallico",
				'pt-br': "Símbolo Metálico",
				'de-de': "Metallsymbol"
			},
			effect: {
				'en-us': "Each of your Pokémon that has any Metal Energy attached to it can’t be affected by any Special Conditions. Remove any Special Conditions affecting those Pokémon.",
				'fr-fr': "Aucun de vos Pokémon auquel de l’Énergie Metal est attachée ne peut être affecté par des États Spéciaux. Retirez tous les États Spéciaux affectant ces Pokémon.",
				'es-es': "Cada uno de tus Pokémon que tenga alguna Energía Metal unida a él no se puede ver afectado por ninguna Condición Especial. Elimina cualquier Condición Especial que afecte a esos Pokémon.",
				'it-it': "Nessuno dei tuoi Pokémon che ha delle Energie Metal assegnate può essere influenzato da condizioni speciali. Rimuovi tutte le condizioni speciali che influenzano tali Pokémon.",
				'pt-br': "Cada um dos seus Pokémon que tiver alguma Energia Metal ligada a ele não poderá ser afetado por quaisquer Condições Especiais. Remova todas as Condições Especiais que afetem aqueles Pokémon.",
				'de-de': "Jedes deiner Pokémon, an das mindestens 1 Metal-Energie angelegt ist, kann nicht von Speziellen Zuständen betroffen werden. Alle Speziellen Zustände auf jenen Pokémon verlieren ihre Wirkung."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Metal",
				"Metal",
			],
			name: {
				'en-us': "Dueling Saber",
				'fr-fr': "Sabre Duel",
				'es-es': "Sable Duelo",
				'it-it': "Sciabola Rivale",
				'pt-br': "Sabre de Duelo",
				'de-de': "Duellierende Säbel"
			},
			effect: {
				'en-us': "If there is any Stadium card in play, this attack does 60 more damage.",
				'fr-fr': "S’il y a une carte Stade en jeu, cette attaque inflige 60 dégâts supplémentaires.",
				'es-es': "Si hay alguna carta de Estadio en juego, este ataque hace 60 puntos de daño más.",
				'it-it': "Se c’è in gioco una carta Stadio, questo attacco infligge 60 danni in più.",
				'pt-br': "Se houver alguma carta de Estádio em jogo, este ataque causará 60 pontos de dano a mais.",
				'de-de': "Wenn eine Stadionkarte im Spiel ist, fügt diese Attacke 60 Schadenspunkte mehr zu."
			},
			damage: "50+",

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Iron Rule GX",
				'fr-fr': "Volonté de Fer GX",
				'es-es': "Regla de Acero GX",
				'it-it': "Regola Ferrea GX",
				'pt-br': "Lei Férrea GX",
				'de-de': "Eiserne Regel GX"
			},
			effect: {
				'en-us': "During your opponent’s next turn, their Pokémon can’t attack. (This includes Pokémon that come into play on that turn.) (You can’t use more than 1 GX attack in a game.)",
				'fr-fr': "Pendant le prochain tour de votre adversaire, ses Pokémon ne peuvent pas attaquer. (Cela comprend les Pokémon qui sont mis en jeu pendant ce tour.) (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				'es-es': "Durante el próximo turno de tu rival, sus Pokémon no pueden atacar. (Esto incluye Pokémon que entran en juego en ese turno). (No puedes usar más de 1 ataque GX en una partida).",
				'it-it': "Durante il prossimo turno del tuo avversario, i suoi Pokémon non possono attaccare, inclusi i Pokémon entrati in gioco in quel turno. Non puoi usare più di un attacco GX a partita.",
				'pt-br': "Durante a próxima vez de jogar do seu oponente, os Pokémon dele(a) não poderão atacar (isto inclui Pokémon que entrarem em jogo naquela rodada). (Você não pode usar mais de 1 ataque GX por partida.)",
				'de-de': "Während des nächsten Zuges deines Gegners können seine Pokémon nicht angreifen. (Dies schließt Pokémon, die während jenes Zuges ins Spiel gebracht werden, ein.) (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},

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

	retreat: 1,

	thirdParty: {
		cardmarket: 369035,
		tcgplayer: 183888
	}
}

export default card
