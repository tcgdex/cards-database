import {Card} from "../../../interfaces"
import Set from "../ADV4"

const card: Card = {
      set: Set,
      name: {
         en: "Banette",
         ja: "バネット",
         fr: "Banette",
         de: "Banette",
         es: "Banette",
         it: "Banette",
         pt: "Banette",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [354],
      hp: 70,
      types: ["Psychic"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Psychic"],
          name: {
            en: "Shadow Steal",
            ja: "シャドウスチール",
            fr: "Ombre voler",
            de: "Schatten Steal",
            es: "Robar",
            it: "L'ombra ruba",
            pt: "Shadow roube",
          },
          effect: {
            en: "Does 10 damage plus 20 more damage for each Special Energy card in your opponent's discard pile.",
            ja: "対戦相手の捨てられた山の各特別なエネルギーカードに対して、10のダメージと20のダメージを与えます。",
            fr: "Fait 10 dégâts plus 20 dégâts supplémentaires pour chaque carte d'énergie spéciale dans la pile de défausse de votre adversaire.",
            de: "Fügt 10 Schäden plus 20 weitere Schäden für jede spezielle Energiekarte in Ihrem Gegner.",
            es: "Hace 10 daños más 20 más de daño por cada tarjeta de energía especial en la pila de descarte de tu oponente.",
            it: "Fa 10 danni più 20 danni in più per ogni speciale carta energetica nella pila di scarto dell'avversario.",
            pt: "10 danos mais 20 mais danos para cada cartão de energia especial na pilha de descarte do seu oponente.",
          },
        },
        {
          cost: ["Psychic", "Colorless"],
          name: {
            en: "Darkness Chant",
            ja: "闇の聖歌",
            fr: "Chant de l'obscurité",
            de: "Dunkelheit Gesang",
            es: "Canto de oscuridad",
            it: "Darkness Chant",
            pt: "Canto das trevas",
          },
          effect: {
            en: "Count the number of Basic Pokemon or Evolution cards in your discard pile. Put that many damage counters on the Defending Pokemon. You can't put more than 6 damage counters on the Defending Pokemon in this way.",
            ja: "廃棄パイルに基本的なポケモンまたは進化カードの数を数えます。その多くのダメージカウンターを防御ポケモンに置きます。このようにして、ディフェンディングポケモンに6つ以上のダメージカウンターを置くことはできません。",
            fr: "Comptez le nombre de cartes Pokémon ou d'évolution de base dans votre pile de défausse. Mettez autant de compteurs de dégâts sur le Pokémon en défense. Vous ne pouvez pas mettre plus de 6 compteurs de dégâts sur le Pokémon en défense de cette manière.",
            de: "Zählen Sie die Anzahl der grundlegenden Pokemon- oder Evolutionskarten in Ihrem Ablagerungsstapel. Setzen Sie so viele Schadenszähler auf das verteidigende Pokémon. Auf diese Weise können Sie nicht mehr als 6 Schadenszähler auf das verteidigende Pokemon aufnehmen.",
            es: "Cuente el número de pokemon o tarjetas de evolución básicas en su pila de descarte. Ponga tantos contadores de daño en el Pokémon defensor. No puedes poner más de 6 contadores de daño en el Pokémon defensor de esta manera.",
            it: "Conta il numero di pokemon di base o evoluzioni nella tua pila di scarto. Metti molti contatori di danno sul Pokemon in carica. Non puoi mettere più di 6 contatori di danno sul Pokemon in difesa in questo modo.",
            pt: "Conte o número de cartões básicos de Pokemon ou evolução na sua pilha de descarte. Coloque tantos contadores de danos no Pokémon atual. Você não pode colocar mais de 6 contadores de danos no Pokémon atual dessa maneira.",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
