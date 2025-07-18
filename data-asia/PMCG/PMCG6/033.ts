import {Card} from "../../../interfaces"
import Set from "../PMCG6"

const card: Card = {
      set: Set,
      name: {
         en: "Blaine's Ninetales",
         ja: "ブレインのニネタール",
         fr: "Ninetales de Blaine",
         de: "Blaines Ninetales",
         es: "Ninetales de Blaine",
         it: "Blaine's Ninetales",
         pt: "Ninetales de Blaine",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [38],
      hp: 60,
      types: ["Fire"],
      stage: "Stage1",

      abilities: [
        {
          type: "Pokemon Power",
          name: {
            en: "Healing Fire",
            ja: "癒しの火",
            fr: "Feu de guérison",
            de: "Feuer heilen",
            es: "Fuego curativo",
            it: "Fuoco curativo",
            pt: "Fogo de cura",
          },
          effect: {
            en: "Whenever you attach a Fire Energy card from your hand to Blaine's Ninetales, remove 1 damage counter from it, if it has any. This power stops working while Blaine's Ninetales is Asleep, Confused, or Paralyzed.",
            ja: "手からブレインのニネタールにファイアエネルギーカードを取り付けるときはいつでも、存在する場合は1つのダメージカウンターを削除します。このパワーは、ブレインのニネタールが眠っている、混乱し、麻痺している間に機能しなくなります。",
            fr: "Chaque fois que vous attachez une carte d'énergie de feu de votre main aux Ninetales de Blaine, en retirez 1 compteur de dégâts, s'il en a. Ce pouvoir cesse de fonctionner tandis que les Ninetales de Blaine sont endormis, confus ou paralysés.",
            de: "Wenn Sie eine Feuerergiekarte von Ihrer Hand an Blaines Ninetales anbringen, entfernen Sie 1 Schadenschalter davon, falls sie welche hat. Diese Kraft hört auf zu funktionieren, während Blaines Ninetales schläft, verwirrt oder gelähmt ist.",
            es: "Cada vez que adjunta una tarjeta de energía de fuego de su mano a los Ninetales de Blaine, retire 1 contador de daños, si tiene alguna. Este poder deja de funcionar mientras los Ninetales de Blaine están dormidos, confundidos o paralizados.",
            it: "Ogni volta che si attacca una carta di energia antincendio dalla mano alle ninetali di Blaine, rimuovi 1 contatore di danni da essa, se ne ha. Questo potere smette di funzionare mentre le ninetesi di Blaine sono addormentate, confuse o paralizzate.",
            pt: "Sempre que você conectar um cartão de energia de incêndio da sua mão aos ninetales de Blaine, remova 1 contador de danos dele, se houver. Esse poder para de funcionar enquanto Ninetales de Blaine está dormindo, confuso ou paralisado.",
          },
      }],

      attacks: [
        {
          cost: ["Fire", "Fire"],
          name: {
            en: "Burn Up",
            ja: "燃え尽きます",
            fr: "Brûler",
            de: "Verbrennen",
            es: "Consumirse completamente",
            it: "Bruciare",
            pt: "Queimar",
          },
          effect: {
            en: "Flip a coin. If tails, discard all Fire Energy cards attached to Blaine's Ninetales.",
            ja: "コインをひっくり返します。尾の場合は、ブレインのニネタールに取り付けられたすべてのファイアエネルギーカードを捨ててください。",
            fr: "Retourner une pièce. Si Tails, jetez toutes les cartes d'énergie de feu attachées aux Ninetales de Blaine.",
            de: "Eine Münze drehen. Wenn Schwänze, entsorgen Sie alle Brandenergiekarten, die an Blaines Ninetales befestigt sind.",
            es: "Voltea una moneda. Si Tails, deseche todas las cartas de energía de fuego unidas a los Ninetales de Blaine.",
            it: "Capovolgi una moneta. Se le code, scartare tutte le carte di energia del fuoco attaccate alle ninetali di Blaine.",
            pt: "Vire uma moeda. Se a cauda, descarte todos os cartões de energia de incêndio anexados aos ninetales de Blaine.",
          },
          damage: 50,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
        },
      ],
};
