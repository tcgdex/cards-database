import {Card} from "../../../interfaces"
import Set from "../PCG4"

const card: Card = {
      set: Set,
      name: {
         en: "Smeargle",
         ja: "Smeargle",
         fr: "Tracas",
         de: "Schmierer",
         es: "Manchar",
         it: "Smalgle",
         pt: "Smeargle",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [235],
      hp: 50,
      types: ["Colorless"],
      stage: "Basic",

      abilities: [
        {
          name: {
            en: "Makeover",
            ja: "変身",
            fr: "Relooking",
            de: "Makeover",
            es: "Renovación",
            it: "Restyling",
            pt: "Reforma",
          },
          effect: {
            en: "Once during your turn (before your attack), you may discard a basic Energy card attached to 1 of your PokÃ©mon (excluding PokÃ©mon-ex). If you do, search your discard pile for a basic Energy card (excluding the one you discarded) and attach it to that PokÃ©mon. This power can't be used if Smeargle is affected by a Special Condition.",
            ja: "ターン中（攻撃前）に（攻撃の前）、Pokã©Mon（Pokã©Mon-Exを除く）に1つに取り付けられた基本的なエネルギーカードを破棄できます。そうした場合は、廃棄パイルを検索して、基本的なエネルギーカード（廃棄したものを除く）を検索し、そのPokã©Monに取り付けます。 Smeargleが特別な状態の影響を受ける場合、このパワーは使用できません。",
            fr: "Une fois pendant votre tour (avant votre attaque), vous pouvez éliminer une carte d'énergie de base attachée à 1 de votre pokã © Mon (à l'exclusion de Pokã © Mon-EX). Si vous le faites, recherchez votre tas de défausse pour une carte d'énergie de base (à l'exclusion de celle que vous avez jetée) et attachez-la à ce pokã © Mon. Cette puissance ne peut pas être utilisée si le frottis est affecté par une condition spéciale.",
            de: "Sobald Sie während Ihres Zuges (vor Ihrem Angriff) sind, können Sie eine grundlegende Energiekarte verwerfen, die an 1 Ihres Poké Mons verbunden ist (mit Ausnahme von Poké Mon-EX). Wenn Sie dies tun, suchen Sie Ihren Ablagerungsstapel nach einer grundlegenden Energiekarte (ohne die, die Sie weggeworfen haben) und fügen Sie sie an diesem Poké mon an. Diese Leistung kann nicht angewendet werden, wenn Snargle von einem besonderen Zustand beeinflusst wird.",
            es: "Una vez durante su turno (antes de su ataque), puede descartar una tarjeta de energía básica unida a 1 de su Poké Mon (excluyendo Poké Mon-Ex). Si lo hace, busque en su pila de descarte para una tarjeta de energía básica (excluyendo la que descartó) y adhiérase a ese Poké Mon. Esta potencia no se puede usar si Smeargle se ve afectado por una condición especial.",
            it: "Una volta durante il tuo turno (prima del tuo attacco), puoi scartare una carta di energia di base collegata a 1 del tuo poké mon (escluso Poké mon-ex). Se lo fai, cerca nella pila di scarto per una scheda energetica di base (esclusa quella che hai scartato) e attaccarlo a quel poké mon. Questa potenza non può essere utilizzata se Smeargle è influenzato da una condizione speciale.",
            pt: "Uma vez durante o seu turno (antes do seu ataque), você pode descartar um cartão de energia básico conectado a 1 do seu Poké (excluindo Poké Mon-Ex). Se o fizer, procure sua pilha de descarte para obter um cartão de energia básico (excluindo o que você descartou) e anexe -o a esse Poké Mon. Esse poder não pode ser usado se o Smeargle for afetado por uma condição especial.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Split Spiral Punch",
            ja: "スパイラルパンチを分割します",
            fr: "Punch en spirale divisé",
            de: "Split Spiral Punch",
            es: "División de espiral",
            it: "Punch a spirale diviso",
            pt: "Punto em espiral dividido",
          },
          effect: {
            en: "Flip a coin. If heads, the Defending Pokemon is now Confused.",
            ja: "コインをひっくり返します。頭の場合、防御ポケモンは混乱しています。",
            fr: "Retourner une pièce. Si les têtes, le Pokémon en défense est maintenant confus.",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, ist das verteidigende Pokemon jetzt verwirrt.",
            es: "Voltea una moneda. Si se dirige, el Pokémon defensor ahora está confundido.",
            it: "Capovolgi una moneta. Se la testa, il Pokemon in carica è ora confuso.",
            pt: "Vire uma moeda. Se as cabeças, o pokemon atual agora está confuso.",
          },
          damage: 10,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
