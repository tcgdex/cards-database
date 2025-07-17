import {Card} from "../../../interfaces"
import Set from "../PMCG5"

const card: Card = {
      set: Set,
      name: {
         en: "Brock's Primeape",
         ja: "ブロックの入門",
         fr: "Brock's Primeape",
         de: "Brocks Primape",
         es: "Primeape de Brock",
         it: "Brock's Primeape",
         pt: "Brock's Primeape",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [57],
      hp: 70,
      types: ["Fighting"],
      stage: "Stage1",

      abilities: [
        {
          type: "Pokemon Power",
          name: {
            en: "Scram",
            ja: "スクラム",
            fr: "Brouiller",
            de: "Scram",
            es: "Largarse",
            it: "Scram",
            pt: "Scram",
          },
          effect: {
            en: "If Brock's Primeape ever has exactly 10 HP left, shuffle it and all cards attached to it into your deck.  This power stops working while Brock's Primeape is Asleep, Confused, or Paralyzed.",
            ja: "Brockのプライムエーパーがちょうど10 hpの残りを持っている場合は、それをシャッフルし、すべてのカードがデッキに取り付けられています。  このパワーは、ブロックの入門が眠っている、混乱し、麻痺している間に機能しなくなります。",
            fr: "Si Brock's Primeape a jamais exactement 10 HP à jouer, le mélanger et toutes les cartes qui y sont attachées dans votre deck.  Ce pouvoir cesse de fonctionner pendant que Brock's Primeape est endormi, confus ou paralysé.",
            de: "Wenn Brocks Primape jemals genau 10 PS übrig hat, mischen Sie es und alle Karten, die an Ihr Deck angeschlossen sind.  Diese Kraft hört auf, zu arbeiten, während Brocks Primape schläft, verwirrt oder gelähmt ist.",
            es: "Si la Primeape de Brock alguna vez le quedan exactamente 10 HP, baraja y todas las cartas adjuntas en su mazo.  Este poder deja de funcionar, mientras que la primaape de Brock está dormida, confundida o paralizada.",
            it: "Se la primaria di Brock ha mai esattamente 10 CV rimasti, mescola e tutte le carte attaccate nel tuo mazzo.  Questo potere smette di funzionare mentre la prima di Brock è addormentata, confusa o paralizzata.",
            pt: "Se o Primeape de Brock já tiver exatamente 10 hp, embaralhar e todas as cartas anexadas a ele no seu baralho.  Esse poder para de funcionar enquanto o Primeape de Brock está dormindo, confuso ou paralisado.",
          },
      }],

      attacks: [
        {
          cost: ["Fighting", "Fighting", "Fighting"],
          name: {
            en: "Mega Thrash",
            ja: "メガ・スラッシュ",
            fr: "Méga thrash",
            de: "Mega Thrash",
            es: "Mega thrash",
            it: "Mega thrash",
            pt: "Mega thrash",
          },
          effect: {
            en: "Brock's Primeape does 20 damage to itself. If there is a Stadium card in play, discard it.",
            ja: "ブロックのプライムエーパーは、それ自体に20のダメージを与えます。スタジアムカードが再生されている場合は、捨ててください。",
            fr: "Brock's Primeape fait 20 dégâts à lui-même. S'il y a une carte de stade en jeu, jetez-la.",
            de: "Brocks Primape verursacht 20 Schaden für sich. Wenn es eine Stadionkarte im Spiel gibt, entsorgen Sie sie.",
            es: "Primeape de Brock hace 20 daños a sí mismo. Si hay una carta del estadio en juego, descarte.",
            it: "La primaria di Brock fa 20 danni a se stessa. Se c'è una carta da stadio in gioco, scartalo.",
            pt: "O primeape de Brock causa 20 danos a si mesmo. Se houver uma carta de estádio em jogo, descarte -a.",
          },
          damage: 60,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          subtype: "unlimited",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
