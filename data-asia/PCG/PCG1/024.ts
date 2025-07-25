import {Card} from "../../../interfaces"
import Set from "../PCG1"

const card: Card = {
      set: Set,
      name: {
         en: "Moltres ex",
         ja: "Moltres ex",
         fr: "Moltres ex",
         de: "Moltres ex",
         es: "Moltres ex",
         it: "Moltres ex",
         pt: "Moltres Ex",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [146],
      hp: 110,
      types: ["Fire"],
      stage: "Basic",

      abilities: [
        {
          name: {
            en: "Legendary Ascent",
            ja: "伝説的な上昇",
            fr: "Ascension légendaire",
            de: "Legendärer Aufstieg",
            es: "Ascenso legendario",
            it: "Ascesa leggendaria",
            pt: "Ascensão lendária",
          },
          effect: {
            en: "Once during your turn, when you put Moltres ex from your hand onto your Bench, you may switch 1 of your Active PokÃ©mon with Moltres ex. If you do, you may also move any number of basic Fire Energy cards attached to your PokÃ©mon to Moltres ex.",
            ja: "ターン中に、Moltre Exを手からベンチに置くと、Moltre exでアクティブなPokã©Monの1を切り替えることができます。そうした場合、Pokã©Monに取り付けられた数の基本的な火エネルギーカードをMoltres exに移動することもできます。",
            fr: "Une fois pendant votre tour, lorsque vous mettez Moltres Ex de votre main sur votre banc, vous pouvez changer 1 de votre pokã © mon actif avec Moltres Ex. Si vous le faites, vous pouvez également déplacer n'importe quel nombre de cartes d'énergie de feu de base attachées à votre poké à Moltres Ex.",
            de: "Sobald Sie während Ihres Zuges Moltres Ex von Ihrer Hand auf Ihre Bank legen, können Sie 1 Ihres aktiven Poké Mons mit Moltres Ex wechseln. Wenn Sie dies tun, können Sie auch eine beliebige Anzahl von grundlegenden Brandenergiekarten verschieben, die an Ihren Poké Mon Mon mon angeschlossen sind.",
            es: "Una vez durante su turno, cuando coloque Moltres Ex de su mano en su banco, puede cambiar 1 de su Poké Mon activo con Moltres Ex. Si lo hace, también puede mover cualquier cantidad de tarjetas básicas de energía de fuego unidas a su Poké Mon a Moltres Ex.",
            it: "Una volta durante il tuo turno, quando metti i Moltres ex dalla tua mano sulla panchina, puoi cambiare 1 del tuo poké attivo con moltres ex. In tal caso, puoi anche spostare un numero qualsiasi di carte di energia di fuoco di base collegate al tuo poké a Moltres ex.",
            pt: "Uma vez durante o seu turno, quando você coloca Moltres Ex da sua mão em seu banco, você pode alternar 1 do seu Poké Mon ativo com Moltres Ex. Se o fizer, você também pode mover qualquer número de cartões básicos de energia de incêndio anexados ao seu Poké Mon para Moltres Ex.",
          },
      }],

      attacks: [
        {
          cost: ["Fire", "Fire", "Colorless"],
          name: {
            en: "Crushing Flames",
            ja: "炎をつぶします",
            fr: "Flammes écrasantes",
            de: "Flammen zerquetschen",
            es: "Llamas aplastantes",
            it: "Fiamme schiaccianti",
            pt: "Chamas esmagadoras",
          },
          effect: {
            en: "You may discard an Energy card attached to Moltres ex. If you do, the Defending Pokemon is now Confused.",
            ja: "Moltres Exに取り付けられたエネルギーカードを廃棄することができます。もしそうなら、防御するポケモンは混乱しています。",
            fr: "Vous pouvez jeter une carte d'énergie attachée à Moltres Ex. Si vous le faites, le Pokémon en défense est maintenant confus.",
            de: "Sie können eine Energiekarte verwerfen, die an Moltres ex gebunden ist. Wenn Sie dies tun, ist das verteidigende Pokemon jetzt verwirrt.",
            es: "Puede descartar una tarjeta de energía unida a Moltres Ex. Si lo haces, el Pokémon defensor ahora está confundido.",
            it: "È possibile scartare una scheda di energia attaccata a Moltres Ex. Se lo fai, il Pokemon in carica è ora confuso.",
            pt: "Você pode descartar um cartão de energia anexado a Moltres Ex. Se o fizer, o Pokemon defensor agora está confuso.",
          },
          damage: 60,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "holo",
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
