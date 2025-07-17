import {Card} from "../../../interfaces"
import Set from "../neo2"

const card: Card = {
      set: Set,
      name: {
         en: "Houndour (HR)",
         ja: "ハウンドア（HR）",
         fr: "Houndour (HR)",
         de: "Houndour (HR)",
         es: "Houndour (HR)",
         it: "Houndaur (HR)",
         pt: "Houndour (HR)",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [228],
      hp: 50,
      types: ["Fire"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Fire"],
          name: {
            en: "Smog",
            ja: "スモッグ",
            fr: "Smog",
            de: "SMOG",
            es: "Niebla tóxica",
            it: "Smog",
            pt: "Fumaça",
          },
          effect: {
            en: "Flip a coin. If heads, the Defending Pokemon is now Poisoned.",
            ja: "コインをひっくり返します。頭の場合、防御ポケモンは現在毒されています。",
            fr: "Retourner une pièce. Si les têtes, le Pokémon en défense est maintenant empoisonné.",
            de: "Eine Münze drehen. Wenn Köpfe, ist das verteidigende Pokemon jetzt vergiftet.",
            es: "Voltea una moneda. Si se dirige, el Pokémon defensor ahora está envenenado.",
            it: "Capovolgi una moneta. Se la testa, il Pokemon in carica è ora avvelenato.",
            pt: "Vire uma moeda. Se as cabeças, o pokemon atual agora está envenenado.",
          },
          damage: 10,
        },
        {
          cost: ["Fire", "Fire"],
          name: {
            en: "Collect Fire",
            ja: "火を集めます",
            fr: "Percevoir",
            de: "Feuer sammeln",
            es: "Recoger fuego",
            it: "Raccogli il fuoco",
            pt: "Colete fogo",
          },
          effect: {
            en: "If there are any Fire Energy cards in your discard pile, choose 1 of them and attach it to Houndour.",
            ja: "廃棄パイルにファイアエネルギーカードがある場合は、それらの1つを選択して、ハウンドに取り付けます。",
            fr: "S'il y a des cartes d'énergie de feu dans votre tas de défausse, choisissez 1 d'entre elles et attachez-la à Houndour.",
            de: "Wenn Sie Brandenergiekarten in Ihrem Ablagerungsstapel enthalten, wählen Sie 1 davon und befestigen Sie es an Houndour.",
            es: "Si hay tarjetas de energía de fuego en su pila de descarte, elija 1 de ellas y adhiérase a Houndour.",
            it: "Se ci sono delle carte di energia del fuoco nella tua pila di scarto, scegline 1 e attaccala a Houndaur.",
            pt: "Se houver cartas de energia de incêndio em sua pilha de descarte, escolha 1 delas e anexe -a a Houndour.",
          },
          damage: 20,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "holo",
        },
      ],
};
