import {Card} from "../../../interfaces"
import Set from "../PMCG5"

const card: Card = {
      set: Set,
      name: {
         en: "Misty's Tentacruel",
         ja: "ミスティのテンタクルエル",
         fr: "Tentacruel de Misty",
         de: "Mistys Tentacruel",
         es: "Misty's Tentacruel",
         it: "Misty's Tentacruel",
         pt: "Misty de Tentacruel",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [73],
      hp: 70,
      types: ["Water"],
      stage: "Stage1",

      abilities: [
        {
          type: "Pokemon Power",
          name: {
            en: "Flee",
            ja: "逃げる",
            fr: "Fuir",
            de: "Fliehen",
            es: "Huir",
            it: "Fuggire",
            pt: "Fugir",
          },
          effect: {
            en: "If an attack does damage to Misty's Tentacruel while it's your Active Pokmon, you may switch it with 1 of your Benched Pokmon, which prevents all other effects of that attack on Misty's Tentacruel. This power can't be used if Misty's Tentacruel is already Asleep, Confused, or Paralyzed.",
            ja: "攻撃があなたのアクティブなPokmonである間にMistyのTentacruelにダメージを与えた場合、あなたはそれをあなたのベンチ付きPokmonで1つに切り替えることができます。 MistyのTentacruelがすでに眠っている、混乱し、麻痺している場合、この力は使用できません。",
            fr: "Si une attaque endommage le tentacruel de Misty pendant que c'est votre pokmon actif, vous pouvez le changer avec 1 de votre pokmon banc, ce qui empêche tous les autres effets de cette attaque sur Tentacruel de Misty. Ce pouvoir ne peut pas être utilisé si le tentacruel de Misty est déjà endormi, confus ou paralysé.",
            de: "Wenn ein Angriff Mistys Tentacruel während des aktiven Pokmons schädigt, können Sie ihn mit einem Ihrer Bank -Pokmon umschalten, was alle anderen Auswirkungen dieses Angriffs auf Mistys Tentacruel verhindert. Diese Kraft kann nicht verwendet werden, wenn Mistys Tentacruel bereits schläft, verwirrt oder gelähmt ist.",
            es: "Si un ataque da daño a Misty's Tentacruel mientras es su Pokmon activo, puede cambiarlo con 1 de su Pokmon de banca, lo que evita todos los demás efectos de ese ataque contra el Tentacruel de Misty. Este poder no se puede usar si Misty's Tentacruel ya está dormido, confundido o paralizado.",
            it: "Se un attacco fa danni al Tentacruel di Misty mentre è il tuo Pokmon attivo, puoi cambiarlo con 1 del tuo Pokmon in panchina, il che impedisce tutti gli altri effetti di quell'attacco a Misty di Tentacruel. Questo potere non può essere usato se Tentacruel di Misty è già addormentato, confuso o paralizzato.",
            pt: "Se um ataque causar danos ao Tentacruel de Misty, enquanto é o seu Pokmon ativo, você pode trocá -lo com 1 do seu Pokmon bancado, que impede todos os outros efeitos desse ataque ao Tentacruel de Misty. Esse poder não pode ser usado se a tentacruel de Misty já estiver dormindo, confusa ou paralisada.",
          },
      }],

      attacks: [
        {
          cost: ["Water", "Water", "Colorless", "Colorless"],
          name: {
            en: "Jellyfish Poison",
            ja: "クラゲの毒",
            fr: "Poison de méduse",
            de: "Quallengift",
            es: "Veneno de medusas",
            it: "Veleno di gelatina",
            pt: "Águia de água -viva",
          },
          effect: {
            en: "Flip a coin. If heads, the Defending Pokemon is now Poisoned. If tails, the Defending Pokemon is now Confused.",
            ja: "コインをひっくり返します。頭の場合、防御ポケモンは現在毒されています。尾の場合、防御ポケモンは混乱しています。",
            fr: "Retourner une pièce. Si les têtes, le Pokémon en défense est maintenant empoisonné. Si Tails, le Pokémon en défense est maintenant confus.",
            de: "Eine Münze drehen. Wenn Köpfe, ist das verteidigende Pokemon jetzt vergiftet. Wenn Schwänze, ist das verteidigende Pokemon jetzt verwirrt.",
            es: "Voltea una moneda. Si se dirige, el Pokémon defensor ahora está envenenado. Si Tails, el Pokémon defensor ahora está confundido.",
            it: "Capovolgi una moneta. Se la testa, il Pokemon in carica è ora avvelenato. Se le code, il Pokemon in carica è ora confuso.",
            pt: "Vire uma moeda. Se as cabeças, o pokemon atual agora está envenenado. Se o cauda, o pokemon atual agora está confuso.",
          },
          damage: 30,
        },
      ],


      variants: [
        {
          type: "holo",
        },
      ],
};
