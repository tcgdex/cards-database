import {Card} from "../../../interfaces"
import Set from "../PCG7"

const card: Card = {
      set: Set,
      name: {
         en: "Pidgeot (Delta Species)",
         ja: "pidgeot（デルタ種）",
         fr: "Pidgeot (espèces delta)",
         de: "Pidgeot (Delta -Arten)",
         es: "Pidgeot (especie delta)",
         it: "Pidgeot (Delta Species)",
         pt: "PIDGEOT (espécies Delta)",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [18],
      hp: 100,
      types: ["Lightning"],
      stage: "Stage2",

      abilities: [
        {
          name: {
            en: "Delta Reserve",
            ja: "デルタリザーブ",
            fr: "Réserve delta",
            de: "Delta Reserve",
            es: "Reserva delta",
            it: "Delta Reserve",
            pt: "Reserva Delta",
          },
          effect: {
            en: "As long as Pidgeot has any Holon Energy cards attached to it, each player's PokÃ©mon (excluding PokÃ©mon that has Delta on its card) can't use any PokÃ©-Powers.",
            ja: "PidgeotにHolon Energy Cardsが接続されている限り、各プレイヤーのPokã©Mon（カードにデルタを持っているPokã©Monを除く）はPokã©Powersを使用できません。",
            fr: "Tant que Pidgeot a des cartes d'énergie Holon qui y sont attachées, Pokã © Mon de chaque joueur (à l'exclusion de Pokã © Mon qui a delta sur sa carte) ne peut utiliser aucun poké-powers.",
            de: "Solange Pidgeot irgendwelche Holon Energy-Karten mit sich bringt, kann der Poké Mon (mit Ausnahme von Poké Mon Mon, der Delta auf seiner Karte hat) keine Poké-Wächter verwenden.",
            es: "Mientras Pidgeot tenga alguna tarjetas de energía Holon unidas, cada jugador Poké Mon (excluyendo Poké Mon que tiene Delta en su tarjeta) no puede usar ninguna potencia de Poké.",
            it: "Finché Pidgeot ha le carte di energia Holon ad esso collegate, il poké di ogni giocatore (escluso il poké mon che ha delta sulla sua carta) non può usare alcun poké-powers.",
            pt: "Enquanto o PIDGEOT possui cartas de energia Holon anexadas a ele, o Poké Mon de cada jogador (excluindo o Poké Mon que possui delta em seu cartão) não pode usar nenhum poço de Poké.",
          },
      }],

      attacks: [
        {
          cost: ["Lightning", "Metal", "Colorless"],
          name: {
            en: "Rotating Claws",
            ja: "回転爪",
            fr: "Griffes rotatives",
            de: "Krallen rotierende",
            es: "Garras giratorias",
            it: "Artigli rotanti",
            pt: "Garras rotativas",
          },
          effect: {
            en: "You may discard an Energy card attached to Pidgeot. If you do, search your discard pile for an Energy card (excluding the one you discarded) and attach it to Pidgeot.",
            ja: "Pidgeotに取り付けられたエネルギーカードを破棄できます。そうした場合は、廃棄パイルを検索して、エネルギーカード（廃棄したものを除く）を検索し、pidgeotに取り付けます。",
            fr: "Vous pouvez jeter une carte d'énergie attachée à Pidgeot. Si vous le faites, recherchez votre tas de défausse pour une carte d'énergie (à l'exclusion de celle que vous avez jetée) et attachez-la à Pidgeot.",
            de: "Sie können eine an Pidgeot befestigte Energiekarte verwerfen. Wenn Sie dies tun, suchen Sie Ihren Ablagerungsstapel nach einer Energiekarte (mit Ausnahme der, die Sie weggeworfen haben) und befestigen Sie ihn an Pidgeot.",
            es: "Puede descartar una tarjeta de energía unida a Pidgeot. Si lo hace, busque en su pila de descarte para una tarjeta de energía (excluyendo la que descartó) y adhiérase a Pidgeot.",
            it: "È possibile scartare una carta energetica collegata a Pidgeot. Se lo fai, cerca nella pila di scarto per una carta energetica (escluso quella che hai scartato) e attaccarlo a Pidgeot.",
            pt: "Você pode descartar um cartão de energia anexado ao PIDGEOT. Se o fizer, procure sua pilha de descarte para obter um cartão de energia (excluindo o que você descartou) e anexe -o ao PIDGEOT.",
          },
          damage: 50,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          subtype: "unlimited',
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
