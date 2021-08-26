import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Cobalion GX",
		fr: "Cobaltium GX",
		es: "Cobalion GX",
		it: "Cobalion GX",
		pt: "Cobalion GX",
		de: "Kobalium GX"
	},
	illustrator: "5ban Graphics",
	rarity: "Secret Rare",
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
				en: "Metal Symbol",
				fr: "Symbole Métal",
				es: "Símbolo Metálico",
				it: "Simbolo Metallico",
				pt: "Símbolo Metálico",
				de: "Metallsymbol"
			},
			effect: {
				en: "Each of your Pokémon that has any Metal Energy attached to it can’t be affected by any Special Conditions. Remove any Special Conditions affecting those Pokémon.",
				fr: "Aucun de vos Pokémon auquel de l’Énergie Metal est attachée ne peut être affecté par des États Spéciaux. Retirez tous les États Spéciaux affectant ces Pokémon.",
				es: "Cada uno de tus Pokémon que tenga alguna Energía Metal unida a él no se puede ver afectado por ninguna Condición Especial. Elimina cualquier Condición Especial que afecte a esos Pokémon.",
				it: "Nessuno dei tuoi Pokémon che ha delle Energie Metal assegnate può essere influenzato da condizioni speciali. Rimuovi tutte le condizioni speciali che influenzano tali Pokémon.",
				pt: "Cada um dos seus Pokémon que tiver alguma Energia Metal ligada a ele não poderá ser afetado por quaisquer Condições Especiais. Remova todas as Condições Especiais que afetem aqueles Pokémon.",
				de: "Jedes deiner Pokémon, an das mindestens 1 Metal-Energie angelegt ist, kann nicht von Speziellen Zuständen betroffen werden. Alle Speziellen Zustände auf jenen Pokémon verlieren ihre Wirkung."
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
				en: "Dueling Saber",
				fr: "Sabre Duel",
				es: "Sable Duelo",
				it: "Sciabola Rivale",
				pt: "Sabre de Duelo",
				de: "Duellierende Säbel"
			},
			effect: {
				en: "If there is any Stadium card in play, this attack does 60 more damage.",
				fr: "S’il y a une carte Stade en jeu, cette attaque inflige 60 dégâts supplémentaires.",
				es: "Si hay alguna carta de Estadio en juego, este ataque hace 60 puntos de daño más.",
				it: "Se c’è in gioco una carta Stadio, questo attacco infligge 60 danni in più.",
				pt: "Se houver alguma carta de Estádio em jogo, este ataque causará 60 pontos de dano a mais.",
				de: "Wenn eine Stadionkarte im Spiel ist, fügt diese Attacke 60 Schadenspunkte mehr zu."
			},
			damage: "50+",

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Iron Rule GX",
				fr: "Volonté de Fer GX",
				es: "Regla de Acero GX",
				it: "Regola Ferrea GX",
				pt: "Lei Férrea GX",
				de: "Eiserne Regel GX"
			},
			effect: {
				en: "During your opponent’s next turn, their Pokémon can’t attack. (This includes Pokémon that come into play on that turn.) (You can’t use more than 1 GX attack in a game.)",
				fr: "Pendant le prochain tour de votre adversaire, ses Pokémon ne peuvent pas attaquer. (Cela comprend les Pokémon qui sont mis en jeu pendant ce tour.) (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				es: "Durante el próximo turno de tu rival, sus Pokémon no pueden atacar. (Esto incluye Pokémon que entran en juego en ese turno). (No puedes usar más de 1 ataque GX en una partida).",
				it: "Durante il prossimo turno del tuo avversario, i suoi Pokémon non possono attaccare, inclusi i Pokémon entrati in gioco in quel turno. Non puoi usare più di un attacco GX a partita.",
				pt: "Durante a próxima vez de jogar do seu oponente, os Pokémon dele(a) não poderão atacar (isto inclui Pokémon que entrarem em jogo naquela rodada). (Você não pode usar mais de 1 ataque GX por partida.)",
				de: "Während des nächsten Zuges deines Gegners können seine Pokémon nicht angreifen. (Dies schließt Pokémon, die während jenes Zuges ins Spiel gebracht werden, ein.) (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
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



}

export default card
